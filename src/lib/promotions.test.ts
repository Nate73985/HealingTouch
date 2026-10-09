import {describe,it,expect} from 'vitest';
import {getPromotionStatus,getDaysRemaining,isPromotionActive,localDay} from './promotions';
describe('calendar date rules',()=>{
 const p={startDate:'2026-10-09',endDate:'2026-10-11'};
 it('includes both boundary days',()=>{expect(getPromotionStatus(p,new Date(2026,9,9,0))).toBe('active');expect(getPromotionStatus(p,new Date(2026,9,11,23,59))).toBe('active');});
 it('distinguishes upcoming and expired',()=>{expect(getPromotionStatus(p,new Date(2026,9,8))).toBe('upcoming');expect(getPromotionStatus(p,new Date(2026,9,12))).toBe('expired');});
 it('supports disabled offers and undated banners',()=>{expect(isPromotionActive({...p,active:false},new Date(2026,9,10))).toBe(false);expect(getPromotionStatus({})).toBe('active');expect(getDaysRemaining({})).toBeUndefined();});
 it('counts calendar days across daylight savings',()=>{expect(getDaysRemaining({endDate:'2026-11-02'},new Date(2026,9,31))).toBe(2);});
 it('rejects malformed dates',()=>{expect(()=>localDay('2026-02-30')).toThrow();});
});
