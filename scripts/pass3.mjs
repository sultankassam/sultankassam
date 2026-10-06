import {responsive,asset,mark,text,label,line,panel,pulse} from './design.mjs';
const title='font-weight="700" letter-spacing="-1"';
const pad=n=>String(n).padStart(2,'0');
function whoami(p,m){const w=m?400:960;return label(24,34,'01 // IDENTITY',p,13)+line(24,51,w-24,51,p)+
  mark(m?26:50,m?76:98,m?48:110,p)+label(m?88:260,m?94:91,'sultan@github:~$ whoami',p,m?15:19)+
  text(m?24:260,m?157:145,'Sultan Kassam',m?35:38,p.text,title)+
  text(m?24:260,m?195:186,'AI interfaces / Software',m?23:25,p.cyan)+
  text(m?24:260,m?224:217,'Connected workflows',m?23:25,p.text)+
  line(24,m?249:246,w-24,m?249:246,p)+label(24,m?278:279,'SYS.ID / SK-2026',p,13)+
  label(m?24:320,m?303:279,'MODE / BUILD',p,13)+label(m?24:570,m?328:279,'CHANNEL / PUBLIC SOURCE',p,13)+
  `<rect x="${m?355:899}" y="${m?311:263}" width="9" height="18" fill="${p.cyan}" class="cursor"/>`;}
function heatmap(c,p,m){
  const w=m?400:960,colors=p.bg==='#0D1117'?['#1b2630','#0e4429','#006d32','#26a641','#39d353']:['#e5eaf0','#9be9a8','#40c463','#30a14e','#216e39'];
  const start=Date.parse(c.from)-new Date(c.from).getUTCDay()*86400000;
  const groups=Math.ceil((Math.floor((Date.parse(c.through)-start)/604800000)+1)/14);
  const paths=['','','','',''];
  const cell=(x,y,width,height,d)=>{paths[d.level]+=`M${x} ${y}h${width}v${height}h-${width}z`;};
  let b=label(24,34,`02 // PUBLIC ACTIVITY / ${c.year}`,p,13)+text(24,76,'sultan@github:~$ ./activity',m?16:20,p.cyan,'class="mono"');
  if(m){for(let q=0;q<groups;q++){const x=24,y=104+q*104;b+=label(x,y,`WEEKS ${pad(q*14+1)}–${pad(Math.min(53,(q+1)*14))}`,p,12);for(const d of c.days){const week=Math.floor((Date.parse(d.date)-start)/604800000);if(Math.floor(week/14)!==q)continue;const row=new Date(d.date).getUTCDay();cell(x+(week%14)*23,y+12+row*10,18,7,d);}}}
  else{const seen=new Set();for(const d of c.days){const date=new Date(d.date),week=Math.floor((date-start)/604800000),x=24+week*17,y=119+date.getUTCDay()*13;if(!seen.has(date.getUTCMonth())){b+=label(x,105,date.toLocaleDateString('en',{month:'short',timeZone:'UTC'}).toUpperCase(),p,11);seen.add(date.getUTCMonth());}cell(x,y,13,10,d);}}
  b+=paths.map((d,i)=>`<path d="${d}" fill="${colors[i]}"/>`).join('');
  if(!m)b+=`<rect x="24" y="116" width="897" height="94" fill="${p.bg}" class="calendar-veil"/>`;
  const y=m?119+groups*104:235;b+=text(24,y,`${c.total} CONTRIBUTIONS`,m?23:24,p.text,title)+label(m?24:395,m?y+27:y,`CALENDAR STREAK / ${c.currentStreak} DAYS`,p,12)+label(24,m?y+50:263,`${c.from} — ${c.through} / PUBLIC ONLY`,p,m?10:12);
  return b+`<style>.calendar-veil{animation:uncover 1.6s steps(40,end) .4s both;transform-origin:right;transform-box:fill-box}@keyframes uncover{from{transform:scaleX(1)}to{transform:scaleX(0)}}@media(prefers-reduced-motion:reduce){.calendar-veil{display:none}}</style>`;
}
function signal(original,ranked,syncDate,p,m){
  const recent=[...original].sort((a,b)=>b.pushed_at.localeCompare(a.pushed_at)).slice(0,2),w=m?400:960;
  let b=label(24,34,'CURRENT SIGNAL / ENGINEERING',p,13)+text(24,85,pad(original.length),42,p.text,title)+label(105,82,'PUBLIC PROJECTS',p,13)+text(m?24:515,m?126:85,ranked[0]?.[0]??'—',m?26:34,p.cyan,title)+label(m?145:690,m?123:82,'PRIMARY LANGUAGE',p,12);
  for(const [i,r]of recent.entries()){const y=(m?159:122)+i*(m?83:59),age=Math.max(0,Math.floor((Date.parse(syncDate)-Date.parse(r.pushed_at))/86400000)),state=age<=7?'PUSH ≤ 7D':age<=30?'PUSH ≤ 30D':'LAST PUBLIC PUSH';b+=line(24,y,w-24,y,p)+text(24,y+29,r.name.toUpperCase(),m?24:25,p.text,title)+label(m?24:300,m?y+58:y+29,`${state} / ${r.pushed_at.slice(0,10)}`,p,m?12:13);}
  b+=label(24,m?364:267,`SNAPSHOT / ${syncDate} UTC`,p,12)+label(24,m?391:291,'Nairobi generation zone / UTC+3',p,12)+text(24,m?421:317,'Push dates show activity, not live presence.',m?14:16,p.muted);return b;
}
export async function pass3Assets({original,calendar,syncDate,ranked}){
  await responsive('terminal/whoami.svg',[960,304,p=>whoami(p,false)],[400,351,p=>whoami(p,true)],'Sultan Kassam: AI interfaces, software and connected workflows. Build is an editorial mode.');
  const start=Date.parse(calendar.from)-new Date(calendar.from).getUTCDay()*86400000;
  const groups=Math.ceil((Math.floor((Date.parse(calendar.through)-start)/604800000)+1)/14);
  await responsive('activity/contribution-heatmap.svg',[960,278,p=>heatmap(calendar,p,false)],[400,186+groups*104,p=>heatmap(calendar,p,true)],`${calendar.total} public contributions in ${calendar.year} through ${calendar.through}; current streak ${calendar.currentStreak} days.`);
  await responsive('activity/current-signal.svg',[960,340,p=>signal(original,ranked,syncDate,p,false)],[400,444,p=>signal(original,ranked,syncDate,p,true)],'Engineering projects excluding profile and art: recent push dates, project count and primary language by source bytes. Snapshot, not presence.');
  await asset('identity/sk-micro.svg',48,48,p=>mark(4,4,40,p),'SK micro glyph');
  await asset('identity/sultan-wordmark.svg',400,80,p=>text(20,58,'SULTAN',56,p.text,'font-weight="750" letter-spacing="8"'),'Sultan wordmark');
}
