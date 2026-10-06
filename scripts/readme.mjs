import {writeFile,access} from 'node:fs/promises';
const entries=[
 ['hero-dark.svg','Sultan Kassam — think in systems, build in code'],
 ['terminal/whoami.svg','01 // Identity: Sultan Kassam, AI interfaces, software and connected workflows'],
 ['activity/contribution-heatmap.svg','02 // Public GitHub contribution calendar, refreshed daily'],
 ['activity/current-signal.svg','Dated public project activity and contribution snapshot, not live presence'],
 ['sections/systems.svg','01 / public systems'],
 ['projects/project-01.svg','Jarvis: voice-enabled conversational AI prototype. Next.js, React and OpenAI.','https://github.com/sultankassam/jarvis'],
 ['projects/project-02.svg','AutoMod: vehicle-service bookings, inventory and assignment. Django prototype.','https://github.com/sultankassam/AutoMod'],
 ['system-map.svg','02 / Public system topology. Jarvis intelligence and interfaces; AutoMod operations. Separate implementations.'],
 ['matrix.svg','03 / Engineering instruments: technologies verified in public project source'],
 ['build-pipeline.svg','06 // Operating approach: idea, build, test, ship, learn'],
 ['footer.svg','05 / A system worth building? Connect and collaborate']
];
const blocks=[];
for(const [base,alt,href] of entries){
 const mobile=base==='hero-dark.svg'?'hero-mobile.svg':base.replace('.svg','-mobile.svg');
 const light=base==='hero-dark.svg'?'hero-light.svg':base.replace('.svg','-light.svg');
 const variants=[['(max-width: 600px) and (prefers-color-scheme: light)',mobile.replace('.svg','-light.svg')],['(max-width: 600px)',mobile],['(prefers-color-scheme: light)',light],['',base]];
 const sources=[];
 // Page-level media queries reliably select a still SVG even when embedded SVG CSS cannot inherit the preference.
 for(const [media,file] of variants){let still=file.replace('.svg','-still.svg');try{await access(`assets/${still}`);}catch{still=file;}sources.push(`<source media="(prefers-reduced-motion: reduce)${media?' and '+media:''}" srcset="assets/${still}">`);}
 for(const [media,file] of variants.slice(0,3))sources.push(`<source media="${media}" srcset="assets/${file}">`);
 let block=`<picture>${sources.join('')}<img src="assets/${base}" width="100%" alt="${alt}"></picture>`;
 if(href)block=`<a href="${href}">${block}</a>`;
 blocks.push(block);
 if(base==='activity/contribution-heatmap.svg')blocks.push('<sub>Account calendar includes intentional contribution art. Engineering signals below exclude profile and art repositories.</sub>');
}
blocks.push('[GitHub ↗](https://github.com/sultankassam) · [Public projects ↗](https://github.com/sultankassam?tab=repositories)');
blocks.push('<sub>Public prototypes · Daily snapshots, not live presence. [Data methodology](docs/DESIGN.md) · [Pass 3 research](docs/PROFILE_RESEARCH.md).</sub>');
await writeFile('README.md',blocks.join('\n\n')+'\n');
console.log('Generated responsive README with static reduced-motion sources.');
