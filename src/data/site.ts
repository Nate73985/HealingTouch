export const asset = (path: string) => `${import.meta.env.BASE_URL}images/${path}`;
export const siteConfig = {
 practiceName: 'Healing Touch Direct Primary Care', premiumName: 'Healing Touch DPC Premium',
 phone: '(480) 670-2400', phoneHref: 'tel:+14806702400', email: 'info@healingtouchdpc.com',
 address: '3530 S Val Vista Dr, Suite A111, Gilbert, AZ 85297', hours: 'Monday–Friday · 9:00 am–4:30 pm · By appointment only',
 mainWebsite: 'https://healingtouchdpc.com/', mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=3530%20S%20Val%20Vista%20Dr%20Suite%20A111%20Gilbert%20AZ%2085297', mapsEmbedUrl: 'https://www.google.com/maps?q=3530%20S%20Val%20Vista%20Dr%20Suite%20A111%20Gilbert%20AZ%2085297&output=embed', socialLinks: [],
 primaryCTA: {label:'Explore Premium Membership',url:'/memberships'}, secondaryCTA:{label:'Discover Exclusive Offers',url:'/offers'},
 membershipCTA:{label:'Become a member',url:'/contact?interest=Membership'}, offersCTA:{label:'Explore offers',url:'/offers'},
 announcement:{enabled:true,message:'A more personal approach to primary care. Welcome to Premium.',ctaLabel:'Explore the experience',ctaUrl:'/premium',startDate:undefined,endDate:undefined},
 conciergeEnabled:false, welcomeAudio: '', canonicalOrigin: '',
 hero:{eyebrow:'PERSONAL CARE. A HIGHER STANDARD.',title:"Welcome to Healing Touch DPC’s Premium",subtitle:'An Exclusive Healthcare Membership Experience',description:'Discover a more personalized approach to healthcare, where exceptional attention, meaningful relationships, and your long-term wellness come first.',premiumMessage:'Explore Exclusive Memberships, Promotions, and Special Offers Designed Around You.'}
};
export const navigation = [['Home','/'],['Premium Experience','/premium'],['About Dr. T','/about'],['Memberships','/memberships'],['Exclusive Offers','/offers'],['Wellness','/wellness'],['Employers','/employers'],['Testimonials','/testimonials'],['FAQ','/faq'],['Contact','/contact']];

