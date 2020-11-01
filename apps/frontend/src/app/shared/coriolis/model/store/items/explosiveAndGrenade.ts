import { ItemRange, ItemRangedWeaponSubCategory, ItemTechTier, ItemWeapon } from '../../character';

import { fire2, fire3, stun } from '../features';

export const breachChargeSmall   = {name: "breachChargeSmall",   itemSubCategory: ItemRangedWeaponSubCategory.explosive ,bonusModifier: 0, initModifier: 0, blastPower: 6 , damage:  1, crit: 1,   range: ItemRange.close, features: [], techTier: ItemTechTier.ordinary, cost: 500    } as ItemWeapon;   // |||||||||| |
export const breachChargeMedium  = {name: "breachChargeMedium",  itemSubCategory: ItemRangedWeaponSubCategory.explosive ,bonusModifier: 0, initModifier: 0, blastPower: 8 , damage:  1, crit: 1,   range: ItemRange.short, features: [], techTier: ItemTechTier.ordinary, cost: 2000  } as ItemWeapon;   // |||||||||| |
export const breachChargeHeavy   = {name: "breachChargeHeavy",   itemSubCategory: ItemRangedWeaponSubCategory.explosive ,bonusModifier: 0, initModifier: 0, blastPower: 12, damage:  1, crit: 1,   range: ItemRange.short, features: [], techTier: ItemTechTier.ordinary, cost: 10000 } as ItemWeapon;   // |||||||||| |
export const breachChargeMassive = {name: "breachChargeMassive", itemSubCategory: ItemRangedWeaponSubCategory.explosive ,bonusModifier: 0, initModifier: 0, blastPower: 16, damage:  1, crit: 1,   range: ItemRange.short, features: [], techTier: ItemTechTier.ordinary, cost: 40000 } as ItemWeapon;   // |||||||||| |
export const concussionGrenade   = {name: "concussionGrenade",   itemSubCategory: ItemRangedWeaponSubCategory.grenade   ,bonusModifier: 0, initModifier: 0, blastPower: 6 , damage:  1, crit: 2,   range: ItemRange.close, features: [], techTier: ItemTechTier.ordinary, cost: 600    } as ItemWeapon;   // |||||||||| |
export const fragGrenade         = {name: "fragGrenade",         itemSubCategory: ItemRangedWeaponSubCategory.grenade   ,bonusModifier: 0, initModifier: 0, blastPower: 6 , damage:  2, crit: 1,   range: ItemRange.close, features: [], techTier: ItemTechTier.ordinary, cost: 500    } as ItemWeapon;   // |||||||||| |
export const infernoGrenade      = {name: "infernoGrenade",      itemSubCategory: ItemRangedWeaponSubCategory.grenade   ,bonusModifier: 0, initModifier: 0, blastPower: 9 , damage:  2, crit: 1,   range: ItemRange.short, features: [], techTier: ItemTechTier.advanced, cost: 1500  } as ItemWeapon;   // |||||||||| |
export const sensorSmokeGrenade  = {name: "sensorSmokeGrenade",  itemSubCategory: ItemRangedWeaponSubCategory.grenade   ,bonusModifier: 0, initModifier: 0, blastPower: 0 , damage:  0, crit: "-", range: ItemRange.short, features: [{name: 'Blocks vision and sensors'}], techTier: ItemTechTier.ordinary, cost: 1000  } as ItemWeapon;   // |||||||||| |
export const smokeGrenade        = {name: "smokeGrenade",        itemSubCategory: ItemRangedWeaponSubCategory.grenade   ,bonusModifier: 0, initModifier: 0, blastPower: 0 , damage:  0, crit: "-", range: ItemRange.short, features: [{name: 'Blocks vision' }], techTier: ItemTechTier.ordinary, cost: 400    } as ItemWeapon;   // |||||||||| |
export const stunGrenade         = {name: "stunGrenade",         itemSubCategory: ItemRangedWeaponSubCategory.grenade   ,bonusModifier: 0, initModifier: 0, blastPower: 6 , damage:  1, crit: "-", range: ItemRange.close, features: [stun], techTier: ItemTechTier.ordinary, cost: 800    } as ItemWeapon;   // |||||||||| |
export const thermalGrenade      = {name: "thermalGrenade",      itemSubCategory: ItemRangedWeaponSubCategory.grenade   ,bonusModifier: 0, initModifier: 0, blastPower: 6 , damage:  1, crit: 1,   range: ItemRange.close, features: [fire2], techTier: ItemTechTier.advanced, cost: 2000  } as ItemWeapon;   // |||||||||| |
export const thermobaricGrenade  = {name: "thermobaricGrenade",  itemSubCategory: ItemRangedWeaponSubCategory.grenade   ,bonusModifier: 0, initModifier: 0, blastPower: 9 , damage:  1, crit: 1,   range: ItemRange.short, features: [fire3], techTier: ItemTechTier.advanced, cost: 4000  } as ItemWeapon;   // |||||||||| |

export const allExplosivesAndGrenadesWeapons = {
  breachChargeSmall,
  breachChargeMedium,
  breachChargeHeavy,
  breachChargeMassive,
  concussionGrenade,
  fragGrenade,
  infernoGrenade,
  sensorSmokeGrenade,
  smokeGrenade,
  stunGrenade,
  thermalGrenade,
  thermobaricGrenade
};
