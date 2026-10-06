import {writeFile, mkdir} from 'node:fs/promises';
import path from 'node:path';
export const escape = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
export const palettes={
  dark:{bg:'#0D1117',surface:'#161B22',raised:'#1C2531',line:'#303D4E',text:'#F0F6FC',muted:'#A0AEBD',cyan:'#39D0FF',violet:'#A371F7',green:'#56D58B'},
  light:{bg:'#F6F8FC',surface:'#FFFFFF',raised:'#EAF0F8',line:'#C9D5E4',text:'#101E30',muted:'#50647D',cyan:'#006C9E',violet:'#7545C0',green:'#16723F'}
};
export function svg(w,h,body,p,title){return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title"><title id="title">${escape(title)}</title><defs>
<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="${p.line}" stroke-opacity=".32" stroke-width=".6"/></pattern>
<radialGradient id="glow"><stop stop-color="${p.cyan}" stop-opacity=".24"/><stop offset="1" stop-color="${p.cyan}" stop-opacity="0"/></radialGradient>
<radialGradient id="violet"><stop stop-color="${p.violet}" stop-opacity=".12"/><stop offset="1" stop-color="${p.violet}" stop-opacity="0"/></radialGradient>
<linearGradient id="panel" x2="1" y2="1"><stop stop-color="${p.raised}" stop-opacity=".6"/><stop offset="1" stop-color="${p.surface}" stop-opacity=".25"/></linearGradient>
<clipPath id="frame"><rect x="1" y="1" width="${w-2}" height="${h-2}" rx="18"/></clipPath></defs>
<style>.mono{font-family:Consolas,'Liberation Mono',monospace;letter-spacing:1px}.pulse{animation:pulse 2.4s ease-in-out infinite}.cursor{animation:cursor 1.4s steps(2,end) infinite}.scan{animation:scan 10s ease-in-out infinite;transform-box:fill-box;transform-origin:center}@keyframes pulse{0%,100%{opacity:.4}50%{opacity:1}}@keyframes cursor{0%,100%{opacity:1}50%{opacity:.18}}@keyframes scan{0%,100%{transform:translateX(0);opacity:.3}50%{transform:translateX(42px);opacity:.8}}@media(prefers-reduced-motion:reduce){.pulse,.cursor,.scan{animation:none}}</style>
<rect class="outer" x=".5" y=".5" width="${w-1}" height="${h-1}" rx="18" fill="${p.bg}" stroke="${p.line}"/><g clip-path="url(#frame)" font-family="Segoe UI,Arial,sans-serif" fill="${p.text}">${body}</g></svg>\n`;}
export const text=(x,y,s,size=16,color,extra='')=>`<text x="${x}" y="${y}" font-size="${size}" ${color?`fill="${color}"`:''} ${extra}>${escape(s)}</text>`;
export const label=(x,y,s,p,size=13)=>text(x,y,s,size,p.muted,'class="mono"');
export const line=(x,y,x2,y2,p)=>`<path d="M${x} ${y}L${x2} ${y2}" fill="none" stroke="${p.line}"/>`;
export const panel=(x,y,w,h,p)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="url(#panel)" stroke="${p.line}"/>`;
export const mark=(x,y,size,p)=>`<g transform="translate(${x} ${y}) scale(${size/64})" fill="none" stroke="${p.cyan}" stroke-width="5" stroke-linecap="square"><path d="M27 12H9v19h18v21H9M38 12v40M56 12L38 32l18 20"/></g>`;
export const pulse=(x,y,p,r=4)=>`<circle cx="${x}" cy="${y}" r="${r+4}" fill="${p.green}" opacity=".12" class="pulse"/><circle cx="${x}" cy="${y}" r="${r}" fill="${p.green}"/>`;
export async function saveAsset(name,w,h,body,p,title){
  await mkdir(path.dirname(`assets/${name}`),{recursive:true});
  const image=svg(w,h,body,p,title);
  await writeFile(`assets/${name}`,image);
  if(/class="(?:pulse|cursor|scan|boot|calendar-veil|packet)"/.test(body))await writeFile(`assets/${name.replace('.svg','-still.svg')}`,image.replace('</style>','*{animation:none!important}.calendar-veil{display:none!important}</style>'));
}
export async function asset(name,w,h,render,title){for(const [theme,p] of Object.entries(palettes)){const file=theme==='dark'?name:name.replace('.svg','-light.svg');await saveAsset(file,w,h,render(p),p,title);}}
export async function responsive(name,desktop,mobile,title){await asset(name,...desktop,title);await asset(name.replace('.svg','-mobile.svg'),...mobile,title);}
