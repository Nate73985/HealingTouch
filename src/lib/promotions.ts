type Dated = {startDate?:string;endDate?:string};
export function localDay(value:string) { const [y,m,d]=value.split('-').map(Number); const date=new Date(y,m-1,d); if(!/^\d{4}-\d{2}-\d{2}$/.test(value)||date.getFullYear()!==y||date.getMonth()!==m-1||date.getDate()!==d) throw new Error('Invalid calendar date'); return Date.UTC(y,m-1,d)/86400000; }
const todayDay=(now:Date)=>Date.UTC(now.getFullYear(),now.getMonth(),now.getDate())/86400000;
export function getPromotionStatus(p:Dated,now=new Date()):'upcoming'|'active'|'expired' {const day=todayDay(now);if(p.startDate&&day<localDay(p.startDate))return 'upcoming';if(p.endDate&&day>localDay(p.endDate))return 'expired';return 'active';}
export const isPromotionActive=(p:Dated & {active?:boolean},now=new Date())=>p.active!==false&&getPromotionStatus(p,now)==='active';
export const getDaysRemaining=(p:Dated,now=new Date())=>p.endDate?Math.max(0,localDay(p.endDate)-todayDay(now)):undefined;
