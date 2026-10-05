import {writeFile} from 'node:fs/promises';
import {staticAssets,renderData} from './visuals.mjs';
const user='sultankassam';
async function api(path){const headers={Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'};if(process.env.GITHUB_TOKEN)headers.Authorization=`Bearer ${process.env.GITHUB_TOKEN}`;const r=await fetch(`https://api.github.com/${path}`,{headers,signal:AbortSignal.timeout(30000)});if(!r.ok)throw new Error(`GitHub API HTTP ${r.status}`);return r.json();}
// Public user endpoints only. Never enumerate authenticated/private repositories.
const repos=[];for(let page=1;;page++){const batch=await api(`users/${user}/repos?type=owner&per_page=100&page=${page}`);repos.push(...batch.filter(r=>!r.private&&r.visibility==='public'));if(batch.length<100)break;}
const projects=[{name:'jarvis',title:'JARVIS',purpose:'A voice-enabled conversational interface.',stack:'TypeScript / Next.js / React / OpenAI',detail:'Browser speech, chat memory and file-analysis routes.'},{name:'AutoMod',title:'AUTOMOD',purpose:'Vehicle-service and inventory workflows.',stack:'Python / Django / HTML',detail:'Bookings, parts inventory and mechanic assignment.'}];
const languages={};for(const repo of repos.filter(r=>!r.fork&&r.name!==user)){const data=await api(`repos/${user}/${repo.name}/languages`);for(const [k,v] of Object.entries(data))languages[k]=(languages[k]??0)+v;}
const ranked=Object.entries(languages).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));
// Events API is a bounded recent feed, not an annual contribution count.
const events=[];for(let page=1;page<=3;page++){const batch=await api(`users/${user}/events/public?per_page=100&page=${page}`);events.push(...batch.filter(e=>e.public===true));if(batch.length<100)break;}
const dedup=[...new Map(events.map(e=>[e.id,e])).values()];
const original=repos.filter(r=>!r.fork&&r.name!==user);
for(const project of projects)if(!original.some(r=>r.name===project.name))throw new Error('Showcase project is no longer public');
const latest=original.map(r=>r.pushed_at).sort().at(-1)?.slice(0,10)??'No public pushes';
const now=new Date(),syncDate=now.toISOString().slice(0,10),days=[];
for(let i=27;i>=0;i--){const date=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()-i)).toISOString().slice(0,10);days.push({date,count:dedup.filter(e=>e.created_at.slice(0,10)===date).length});}
await staticAssets();
await renderData({repos,projects,original,ranked,latest,days,syncDate});
await writeFile('docs/public-snapshot.json',JSON.stringify({source:'GitHub public REST endpoints',syncDateUTC:syncDate,repositories:original.map(r=>({name:r.name,language:r.language,stars:r.stargazers_count,forks:r.forks_count,pushedAt:r.pushed_at})),languages:ranked,activity:days},null,2)+'\n');
console.log('Generated profile assets from public data.');
