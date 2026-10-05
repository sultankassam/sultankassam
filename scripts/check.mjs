import {readFile,readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
async function files(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){if(e.name==='.git')continue;const p=`${dir}/${e.name}`;out.push(...e.isDirectory()?await files(p):[p]);}return out;}
const all=await files('.'),readme=await readFile('README.md','utf8');
for(const m of readme.matchAll(/(?:src|srcset)="([^"]+)"/g))assert(all.includes(`./${m[1]}`),`Missing image ${m[1]}`);
for(const m of readme.matchAll(/<img\b[^>]*>/g))assert(/alt="[^"]+"/.test(m[0]),'Missing alt text');
for(const file of all){const s=await readFile(file,'utf8');assert(!/gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{30,}|sk-[A-Za-z0-9]{24,}|-----BEGIN (RSA |OPENSSH )?PRIVATE KEY-----/.test(s),`Potential secret in ${file}`);if(file.endsWith('.svg')){assert(Buffer.byteLength(s)<30000,'Oversized SVG');assert(!/<script|<foreignObject|https?:\/\//.test(s.replace('http://www.w3.org/2000/svg','')),'Unsafe or external SVG content');}}
assert(!readme.includes('shields.io'),'Unexpected badge dependency');
console.log(`Checked ${all.length} files: image paths, alt text, SVG size/safety and credential patterns.`);
