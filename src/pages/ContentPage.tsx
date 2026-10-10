import {useLocation,Link} from 'react-router-dom';
import {Button,Heading,MembershipCards,Physician,FAQList,OffersEmpty,ContactDetails,PremiumCTA} from '../components/Shared';
import InquiryForm from '../components/InquiryForm';
import {services} from '../data/services';
import {promotions} from '../data/promotions';
import {testimonials} from '../data/testimonials';
import {getPromotionStatus,isPromotionActive,getDaysRemaining} from '../lib/promotions';
import {asset} from '../data/site';
const titles:Record<string,[string,string,string]>={
 '/premium':['THE PREMIUM EXPERIENCE','Healthcare with you at the center.','Time, trust, and personal attention. A considered extension of the Healing Touch experience.'],
 '/about':['MEET YOUR PHYSICIAN','A relationship that makes a difference.','Get to know the physician behind Healing Touch Direct Primary Care.'],
 '/memberships':['A MORE PERSONAL MEMBERSHIP','Membership Designed Around You','Exceptional care begins with a meaningful relationship.'],
 '/offers':['EXCLUSIVE OFFERS','Exclusive Offers & Member Privileges','Discover limited opportunities designed to make your Healing Touch experience even more rewarding.'],
 '/wellness':['WHOLE-PERSON WELLNESS','Your health. A wider perspective.','Explore the practice’s primary care and wellness services.'],
 '/employers':['HEALING TOUCH FOR YOUR TEAM','Better Healthcare for Your Workforce','Explore a more personal approach to employee primary care.'],
 '/testimonials':['PATIENT PERSPECTIVES','Stories of personal care.','A space for patient experiences, shared with permission.'],
 '/faq':['ANSWERS, WITH CLARITY','A little more understanding.','Your questions about direct primary care, membership, and the practice.'],
 '/contact':['LET’S CONNECT','Your next chapter starts with a conversation.','We look forward to getting to know you.'],
 '/privacy':['POLICY PREVIEW','Privacy Policy','Owner-approved legal copy is pending.'],
 '/terms':['POLICY PREVIEW','Terms of Use','Owner-approved legal copy is pending.'],
 '/accessibility':['ACCESSIBILITY','An experience for everyone.','We welcome feedback on barriers you encounter.']
};
export default function ContentPage(){const {pathname}=useLocation();const title=titles[pathname];if(!title)return <section className="section not-found"><span className="eyebrow">404 · A DIFFERENT PATH</span><h1>Let’s get you back home.</h1><p>This page could not be found.</p><Button to="/">Return home</Button></section>;
return <><section className="page-intro"><span className="eyebrow">{title[0]}</span><h1>{title[1]}</h1><p>{title[2]}</p></section><section className="section page-content">
{pathname==='/about'&&<Physician full/>}
{pathname==='/memberships'&&<><MembershipCards/><div className="process"><h2>Clarity before commitment.</h2><p>Membership covers primary care at the practice, and is not insurance. Labs, imaging, medications, assessments, specialty and hospital care may involve separate costs. Ask for current inclusions, fees and cancellation terms.</p><Link className="text-link" to="/faq">Read membership FAQs →</Link></div></>}
{pathname==='/offers'&&<>{promotions.filter(p=>isPromotionActive(p)).length===0&&<OffersEmpty/>}<div className="service-grid">{promotions.filter(p=>p.active&&getPromotionStatus(p)!=='expired').map(p=><article className="service-card" key={p.id}>{p.image&&<img src={asset(p.image)} alt="" width="600" height="400" loading="lazy"/>}<span className="eyebrow">{getPromotionStatus(p)}</span><h2>{p.title}</h2><p>{p.description}</p><p>Eligibility: {p.eligibility}</p><p>{p.terms}</p>{p.endDate&&<p>{getDaysRemaining(p)} days until the end date</p>}{isPromotionActive(p)&&<Button to={p.ctaUrl}>{p.ctaLabel}</Button>}</article>)}</div></>}
{pathname==='/wellness'&&<><div className="service-grid">{services.map(([name,description],i)=><article className="service-card" key={name}><span className="eyebrow">0{i+1} / WELLNESS & CARE</span><h2>{name}</h2><p>{description}</p><Link className="text-link" to="/contact?interest=Wellness">Ask about this service ↗</Link></article>)}</div><p className="fineprint">Services and suitability are discussed with the practice. This website provides general practice information, not individual medical advice.</p></>}
{pathname==='/employers'&&<div className="employer-content"><Heading eyebrow="PEOPLE FIRST" title="A direct connection to primary care.">Give your team a place to start a conversation about their health. The public practice FAQ includes employer enrollment inquiries.</Heading><div className="service-grid">{['Personal physician relationships','Preventive care conversations','Membership inquiries for your team'].map(t=><article className="service-card" key={t}><h3>{t}</h3><p>Discuss available arrangements and eligibility with Healing Touch.</p></article>)}</div><p>No employer pricing, savings estimate, or Premium employee package is being represented here. Current arrangements require practice confirmation.</p><Button to="/contact?interest=Employer">Request Employer Information</Button></div>}
{pathname==='/testimonials'&&<>{testimonials.filter(t=>t.approved).length?testimonials.filter(t=>t.approved).map(t=><blockquote key={t.id}>{t.quote}<cite>{t.name}</cite></blockquote>):<div className="empty-state"><span className="empty-symbol">“</span><h2>Trust is personal.</h2><p>Approved patient testimonial will appear here.</p><p className="fineprint">Public reviews exist on the main practice site. Permission for reuse on this independent Premium site is pending.</p><Button to="/about">Meet Dr. T</Button></div>}</>}
{pathname==='/faq'&&<FAQList/>}
{pathname==='/contact'&&<div className="contact-grid"><ContactDetails/><InquiryForm key={pathname}/></div>}
{['/privacy','/terms'].includes(pathname)&&<div className="legal-placeholder"><h2>Local review placeholder</h2><p>This page awaits review and approval by the practice’s legal adviser. It is not a complete policy.</p><p>The demo inquiry form validates information on your device without sending or saving it. No analytics, patient portal or third-party form service is configured. Do not enter sensitive healthcare information.</p><Button to="/contact">Contact the practice</Button></div>}
{pathname==='/accessibility'&&<><h2>Designed for access.</h2><p>This site includes keyboard navigation, visible focus indicators, a skip link, semantic form labels, responsive layouts and reduced-motion support. Accessibility conformance has not been independently certified.</p><p>For help accessing practice information, call the practice or use the contact details below.</p><ContactDetails/></>}
</section>{!['/contact','/privacy','/terms','/accessibility'].includes(pathname)&&<PremiumCTA/>}</>}



