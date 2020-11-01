import { ItemRange, ItemRangedWeaponSubCategory, ItemTechTier, ItemWeapon } from '../../character';
import {
  antiVehicle,
  armorPiercing,
  automaticFire,
  builtInWeapon,
  bulkyWeapon,
  fire3,
  heavyWeapon,
  highCapacityWeapon,
  lightWeapon,
  reliableWeapon,
  silent,
  singleShotWeapon,
  stun,
  thermalSweep
} from '../features';

export const vulcanCricket = {
  name: 'vulcanCricket',
  itemSubCategory: ItemRangedWeaponSubCategory.pistol,
  bonusModifier: +1,
  initModifier: +2,
  damage: 2,
  crit: 2,
  range: ItemRange.short,
  features: [lightWeapon],
  techTier: ItemTechTier.ordinary,
  cost: 700
} as ItemWeapon;
export const vulcanPistol = {
  name: 'vulcanPistol',
  itemSubCategory: ItemRangedWeaponSubCategory.pistol,
  bonusModifier: +1,
  initModifier: +1,
  damage: 2,
  crit: 2,
  range: ItemRange.short,
  features: [reliableWeapon],
  techTier: ItemTechTier.ordinary,
  cost: 500
} as ItemWeapon;
export const vulcanPistolAraxOmir = {
  name: 'vulcanPistolAraxOmir',
  itemSubCategory: ItemRangedWeaponSubCategory.pistol,
  bonusModifier: 0,
  initModifier: 0,
  damage: 3,
  crit: 2,
  range: ItemRange.short,
  features: [{name: '+2toMANIPULATIONwhenthreatening' }],
  techTier: ItemTechTier.ordinary,
  cost: 1200
} as ItemWeapon;
export const vulcanScorpion = {
  name: 'vulcanScorpion',
  itemSubCategory: ItemRangedWeaponSubCategory.pistol,
  bonusModifier: -1,
  initModifier: +1,
  damage: 2,
  crit: 2,
  range: ItemRange.short,
  features: [automaticFire],
  techTier: ItemTechTier.ordinary,
  cost: 1000
} as ItemWeapon;
export const acceleratorPistol = {
  name: 'acceleratorPistol',
  itemSubCategory: ItemRangedWeaponSubCategory.pistol,
  bonusModifier: +1,
  initModifier: 0,
  damage: 2,
  crit: 1,
  range: ItemRange.long,
  features: [silent],
  techTier: ItemTechTier.ordinary,
  cost: 700
} as ItemWeapon;
export const thermalCricket = {
  name: 'thermalCricket',
  itemSubCategory: ItemRangedWeaponSubCategory.pistol,
  bonusModifier: +1,
  initModifier: +2,
  damage: 3,
  crit: 2,
  range: ItemRange.short,
  features: [lightWeapon],
  techTier: ItemTechTier.advanced,
  cost: 2500
} as ItemWeapon;
export const thermalPistol = {
  name: 'thermalPistol',
  itemSubCategory: ItemRangedWeaponSubCategory.pistol,
  bonusModifier: +1,
  initModifier: +1,
  damage: 3,
  crit: 2,
  range: ItemRange.long,
  features: [],
  techTier: ItemTechTier.advanced,
  cost: 2300
} as ItemWeapon;
export const stunGun = {
  name: 'stunGun',
  itemSubCategory: ItemRangedWeaponSubCategory.pistol,
  bonusModifier: +1,
  initModifier: +1,
  damage: 2,
  crit: 'stun',
  range: ItemRange.short,
  features: [stun],
  techTier: ItemTechTier.advanced,
  cost: 2000
} as ItemWeapon;
export const vulcanCarbine = {
  name: 'vulcanCarbine',
  itemSubCategory: ItemRangedWeaponSubCategory.carabine,
  bonusModifier: +1,
  initModifier: 0,
  damage: 3,
  crit: 2,
  range: ItemRange.short,
  features: [automaticFire],
  techTier: ItemTechTier.ordinary,
  cost: 2000
} as ItemWeapon;
export const legionnaireCarbineDayal3 = {
  name: 'legionnaireCarbineDayal3',
  itemSubCategory: ItemRangedWeaponSubCategory.carabine,
  bonusModifier: +1,
  initModifier: 0,
  damage: 3,
  crit: 2,
  range: ItemRange.long,
  features: [automaticFire, highCapacityWeapon, builtInWeapon],
  techTier: ItemTechTier.ordinary,
  cost: 3000
} as ItemWeapon;
export const vulcanPdw = {
  name: 'vulcanPdw',
  itemSubCategory: ItemRangedWeaponSubCategory.carabine,
  bonusModifier: +1,
  initModifier: 1,
  damage: 3,
  crit: 2,
  range: ItemRange.short,
  features: [automaticFire],
  techTier: ItemTechTier.ordinary,
  cost: 2500
} as ItemWeapon;
export const acceleratorCarbine = {
  name: 'acceleratorCarbine',
  itemSubCategory: ItemRangedWeaponSubCategory.carabine,
  bonusModifier: +1,
  initModifier: 0,
  damage: 3,
  crit: 1,
  range: ItemRange.long,
  features: [automaticFire, armorPiercing, silent],
  techTier: ItemTechTier.ordinary,
  cost: 3000
} as ItemWeapon;
export const twinCarbine = {
  name: 'twinCarbine',
  itemSubCategory: ItemRangedWeaponSubCategory.carabine,
  bonusModifier: +1,
  initModifier: 0,
  damage: 4,
  crit: 2,
  range: ItemRange.long,
  features: [armorPiercing, silent],
  techTier: ItemTechTier.ordinary,
  cost: 3700
} as ItemWeapon;
export const thermalCarbine = {
  name: 'thermalCarbine',
  itemSubCategory: ItemRangedWeaponSubCategory.carabine,
  bonusModifier: +1,
  initModifier: 0,
  damage: 4,
  crit: 2,
  range: ItemRange.long,
  features: [thermalSweep],
  techTier: ItemTechTier.advanced,
  cost: 6500
} as ItemWeapon;
export const saladinGrapeGun = {
  name: 'saladinGrapeGun',
  itemSubCategory: ItemRangedWeaponSubCategory.grape,
  bonusModifier: +2,
  initModifier: 0,
  damage: 2,
  crit: 2,
  range: ItemRange.short,
  features: [singleShotWeapon],
  techTier: ItemTechTier.primitive,
  cost: 200
} as ItemWeapon;
export const grapeRifle = {
  name: 'grapeRifle',
  itemSubCategory: ItemRangedWeaponSubCategory.grape,
  bonusModifier: +2,
  initModifier: 0,
  damage: 2,
  crit: 2,
  range: ItemRange.short,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 400
} as ItemWeapon;
export const sawnOffGrapeRifle = {
  name: 'sawnOffGrapeRifle',
  itemSubCategory: ItemRangedWeaponSubCategory.grape,
  bonusModifier: +2,
  initModifier: +1,
  damage: 2,
  crit: 3,
  range: ItemRange.short,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 400
} as ItemWeapon;
export const grapeCarbine = {
  name: 'grapeCarbine',
  itemSubCategory: ItemRangedWeaponSubCategory.grape,
  bonusModifier: +2,
  initModifier: +1,
  damage: 2,
  crit: 2,
  range: ItemRange.short,
  features: [automaticFire],
  techTier: ItemTechTier.ordinary,
  cost: 600
} as ItemWeapon;
export const longRifle = {
  name: 'longRifle',
  itemSubCategory: ItemRangedWeaponSubCategory.rifle,
  bonusModifier: 0,
  initModifier: 0,
  damage: 2,
  crit: 2,
  range: ItemRange.long,
  features: [singleShotWeapon],
  techTier: ItemTechTier.primitive,
  cost: 100
} as ItemWeapon;
export const sawedOffLongRifle = {
  name: 'sawedOffLongRifle',
  itemSubCategory: ItemRangedWeaponSubCategory.rifle,
  bonusModifier: 0,
  initModifier: +1,
  damage: 2,
  crit: 2,
  range: ItemRange.short,
  features: [singleShotWeapon],
  techTier: ItemTechTier.primitive,
  cost: 100
} as ItemWeapon;
export const acceleratorRifle = {
  name: 'acceleratorRifle',
  itemSubCategory: ItemRangedWeaponSubCategory.rifle,
  bonusModifier: +1,
  initModifier: 0,
  damage: 3,
  crit: 1,
  range: ItemRange.extreme,
  features: [armorPiercing, {name: 'Nightsights' }, silent],
  techTier: ItemTechTier.ordinary,
  cost: 2000
} as ItemWeapon;
export const acceleratorRifleNesteraParox = {
  name: 'acceleratorRifleNesteraParox',
  itemSubCategory: ItemRangedWeaponSubCategory.rifle,
  bonusModifier: 0,
  initModifier: 0,
  damage: 4,
  crit: 1,
  range: ItemRange.extreme,
  features: [heavyWeapon, antiVehicle, armorPiercing, {name: 'Nightsights' }, silent],
  techTier: ItemTechTier.ordinary,
  cost: 3000
} as ItemWeapon;
export const thermalRifle = {
  name: 'thermalRifle',
  itemSubCategory: ItemRangedWeaponSubCategory.rifle,
  bonusModifier: 0,
  initModifier: 0,
  damage: 5,
  crit: 2,
  range: ItemRange.extreme,
  features: [armorPiercing, {name: 'Nightsights' }],
  techTier: ItemTechTier.advanced,
  cost: 6000
} as ItemWeapon;
export const vulcanMachineGun = {
  name: 'vulcanMachineGun',
  itemSubCategory: ItemRangedWeaponSubCategory.heavyWeapon,
  bonusModifier: +1,
  initModifier: 0,
  damage: 4,
  crit: 2,
  range: ItemRange.short,
  features: [heavyWeapon, bulkyWeapon, automaticFire, highCapacityWeapon],
  techTier: ItemTechTier.ordinary,
  cost: 6500
} as ItemWeapon;
export const acceleratorMachineGun = {
  name: 'acceleratorMachineGun',
  itemSubCategory: ItemRangedWeaponSubCategory.heavyWeapon,
  bonusModifier: +1,
  initModifier: 0,
  damage: 3,
  crit: 1,
  range: ItemRange.long,
  features: [heavyWeapon, bulkyWeapon, automaticFire, highCapacityWeapon, armorPiercing, silent],
  techTier: ItemTechTier.ordinary,
  cost: 10000
} as ItemWeapon;
export const acceleratorLauncher = {
  name: 'acceleratorLauncher',
  itemSubCategory: ItemRangedWeaponSubCategory.heavyWeapon,
  bonusModifier: +1,
  initModifier: 0,
  damage: 'grenade',
  crit: 'grenade',
  range: ItemRange.long,
  features: [heavyWeapon],
  techTier: ItemTechTier.ordinary,
  cost: 8000
} as ItemWeapon;
export const missileLauncher = {
  name: 'missileLauncher',
  itemSubCategory: ItemRangedWeaponSubCategory.heavyWeapon,
  bonusModifier: 0,
  initModifier: 0,
  damage: 6,
  crit: 1,
  range: ItemRange.extreme,
  features: [heavyWeapon, singleShotWeapon, antiVehicle],
  techTier: ItemTechTier.ordinary,
  cost: 900
} as ItemWeapon;
export const flamethrower = {
  name: 'flamethrower',
  itemSubCategory: ItemRangedWeaponSubCategory.heavyWeapon,
  bonusModifier: +1,
  initModifier: 0,
  damage: 3,
  crit: 1,
  range: ItemRange.short,
  features: [heavyWeapon, fire3],
  techTier: ItemTechTier.ordinary,
  cost: 1800
} as ItemWeapon;
export const grenadeLauncher = {
  name: 'grenadeLauncher',
  itemSubCategory: ItemRangedWeaponSubCategory.heavyWeapon,
  bonusModifier: 0,
  initModifier: 0,
  damage: 'grenade',
  crit: 'grenade',
  range: ItemRange.long,
  features: [singleShotWeapon],
  techTier: ItemTechTier.ordinary,
  cost: 1200
} as ItemWeapon;
export const thermalMachineGun = {
  name: 'thermalMachineGun',
  itemSubCategory: ItemRangedWeaponSubCategory.heavyWeapon,
  bonusModifier: +1,
  initModifier: 0,
  damage: 4,
  crit: 1,
  range: ItemRange.long,
  features: [heavyWeapon, bulkyWeapon, thermalSweep, highCapacityWeapon],
  techTier: ItemTechTier.advanced,
  cost: 22000
} as ItemWeapon;
export const blowpipe = {
  name: 'blowpipe',
  itemSubCategory: ItemRangedWeaponSubCategory.other,
  bonusModifier: 0,
  initModifier: +2,
  damage: 1,
  crit: 4,
  range: ItemRange.short,
  features: [lightWeapon, singleShotWeapon],
  techTier: ItemTechTier.primitive,
  cost: 50
} as ItemWeapon;
export const throwingKnife = {
  name: 'throwingKnife',
  itemSubCategory: ItemRangedWeaponSubCategory.other,
  bonusModifier: 0,
  initModifier: +1,
  damage: 1,
  crit: 2,
  range: ItemRange.short,
  features: [lightWeapon],
  techTier: ItemTechTier.primitive,
  cost: 50
} as ItemWeapon;
export const throwingSpear = {
  name: 'throwingSpear',
  itemSubCategory: ItemRangedWeaponSubCategory.other,
  bonusModifier: +1,
  initModifier: +1,
  damage: 2,
  crit: 2,
  range: ItemRange.short,
  features: [],
  techTier: ItemTechTier.primitive,
  cost: 150
} as ItemWeapon;
export const throwingAxe = {
  name: 'throwingAxe',
  itemSubCategory: ItemRangedWeaponSubCategory.other,
  bonusModifier: 0,
  initModifier: 0,
  damage: 2,
  crit: 2,
  range: ItemRange.short,
  features: [],
  techTier: ItemTechTier.primitive,
  cost: 300
} as ItemWeapon;
export const spearThrower = {
  name: 'spearThrower',
  itemSubCategory: ItemRangedWeaponSubCategory.other,
  bonusModifier: 0,
  initModifier: 0,
  damage: 2,
  crit: 2,
  range: ItemRange.short,
  features: [heavyWeapon, singleShotWeapon],
  techTier: ItemTechTier.primitive,
  cost: 600
} as ItemWeapon;
export const harpoon = {
  name: 'harpoon',
  itemSubCategory: ItemRangedWeaponSubCategory.other,
  bonusModifier: +1,
  initModifier: +1,
  damage: 2,
  crit: 3,
  range: ItemRange.short,
  features: [heavyWeapon, singleShotWeapon],
  techTier: ItemTechTier.primitive,
  cost: 200
} as ItemWeapon;
export const combatBow = {
  name: 'combatBow',
  itemSubCategory: ItemRangedWeaponSubCategory.other,
  bonusModifier: +1,
  initModifier: +1,
  damage: '3/grenade',
  crit: '2/grenade',
  range: ItemRange.long,
  features: [singleShotWeapon],
  techTier: ItemTechTier.ordinary,
  cost: 2000
} as ItemWeapon;

export const allRangedWeapons = {
  vulcanCricket,
  vulcanPistol,
  vulcanPistolAraxOmir,
  vulcanScorpion,
  acceleratorPistol,
  thermalCricket,
  thermalPistol,
  stunGun,
  vulcanCarbine,
  legionnaireCarbineDayal3,
  vulcanPdw,
  acceleratorCarbine,
  twinCarbine,
  thermalCarbine,
  saladinGrapeGun,
  grapeRifle,
  sawnOffGrapeRifle,
  grapeCarbine,
  longRifle,
  sawedOffLongRifle,
  acceleratorRifle,
  acceleratorRifleNesteraParox,
  thermalRifle,
  vulcanMachineGun,
  acceleratorMachineGun,
  acceleratorLauncher,
  missileLauncher,
  flamethrower,
  grenadeLauncher,
  thermalMachineGun,
  blowpipe,
  throwingKnife,
  throwingSpear,
  throwingAxe,
  spearThrower,
  harpoon,
  combatBow
};
