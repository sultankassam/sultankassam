import assert from 'node:assert/strict';
export function parseCalendar(html,year,through){
  assert(!/private contributions|including private/i.test(html),'Calendar includes private contribution counts');
  const tips=new Map([...html.matchAll(/<tool-tip\b[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g)].map(m=>[m[1],m[2].replace(/<[^>]*>/g,'').trim()]));
  const days=[];
  for(const m of html.matchAll(/<td\b[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*>/g)){
    const date=m[1];if(!date.startsWith(`${year}-`)||date>through)continue;
    const id=m[0].match(/\bid="([^"]+)"/)?.[1],level=Number(m[0].match(/data-level="([0-4])"/)?.[1]),tip=tips.get(id);
    assert(tip&&Number.isInteger(level),'Unsupported GitHub calendar markup');
    const count=/^No contributions/i.test(tip)?0:Number(tip.match(/^([\d,]+) contribution/)?.[1]?.replaceAll(',',''));
    assert(Number.isInteger(count)&&count>=0,'Missing exact daily contribution count');
    assert((count===0)===(level===0),'Calendar count/level mismatch');
    days.push({date,count,level});
  }
  days.sort((a,b)=>a.date.localeCompare(b.date));
  const expected=Math.round((Date.parse(through)-Date.parse(`${year}-01-01`))/86400000)+1;
  assert(days.length===expected&&new Set(days.map(d=>d.date)).size===expected,'Incomplete or duplicate public calendar');
  const total=days.reduce((s,d)=>s+d.count,0);
  const stated=html.match(/id="js-contribution-activity-description"[^>]*>\s*([\d,]+)\s+contributions/);
  assert(stated&&Number(stated[1].replaceAll(',',''))===total,'Calendar total does not match daily counts');
  let streak=0;let i=days.length-1;if(days[i].count===0)i--;for(;i>=0&&days[i].count>0;i--)streak++;
  return {year,from:`${year}-01-01`,through,total,currentStreak:streak,days};
}
export async function fetchCalendar(user,through){
  const year=Number(through.slice(0,4)),source=`https://github.com/users/${user}/contributions?include_private=false&from=${year}-01-01&to=${through}`;
  const response=await fetch(source,{signal:AbortSignal.timeout(30000)});if(!response.ok)throw new Error(`Contribution source HTTP ${response.status}`);
  return {...parseCalendar(await response.text(),year,through),source};
}
