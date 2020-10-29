import { ItemRange, ItemTechTier, ItemWeapon } from '../../character';
import {
  antiVehicle,
  armorPiercing,
  automaticFire,
  builtInWeapon, bulkyWeapon, fire3, heavyWeapon,
  highCapacityWeapon,
  lightWeapon,
  reliableWeapon,
  silent, singleShotWeapon,
  stun, thermalSweep
} from '../features';

export const vulcanCricket = {
  name: 'vulcanCricket',
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
  bonusModifier: 0,
  initModifier: 0,
  damage: 3,
  crit: 2,
  range: ItemRange.short,
  features: ['+2toMANIPULATIONwhenthreatening'],
  techTier: ItemTechTier.ordinary,
  cost: 1200
} as ItemWeapon;
export const vulcanScorpion = {
  name: 'vulcanScorpion',
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
  bonusModifier: +1,
  initModifier: 0,
  damage: 3,
  crit: 1,
  range: ItemRange.extreme,
  features: [armorPiercing, 'Nightsights', silent],
  techTier: ItemTechTier.ordinary,
  cost: 2000
} as ItemWeapon;
export const acceleratorRifleNesteraParox = {
  name: 'acceleratorRifleNesteraParox',
  bonusModifier: 0,
  initModifier: 0,
  damage: 4,
  crit: 1,
  range: ItemRange.extreme,
  features: [heavyWeapon, antiVehicle, armorPiercing, 'Nightsights', silent],
  techTier: ItemTechTier.ordinary,
  cost: 3000
} as ItemWeapon;
export const thermalRifle = {
  name: 'thermalRifle',
  bonusModifier: 0,
  initModifier: 0,
  damage: 5,
  crit: 2,
  range: ItemRange.extreme,
  features: [armorPiercing, 'Nightsights'],
  techTier: ItemTechTier.advanced,
  cost: 6000
} as ItemWeapon;
export const vulcanMachineGun = {
  name: 'vulcanMachineGun',
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
  bonusModifier: +1,
  initModifier: +1,
  damage: '3/grenade',
  crit: '2/grenade',
  range: ItemRange.long,
  features: [singleShotWeapon],
  techTier: ItemTechTier.ordinary,
  cost: 2000
} as ItemWeapon;

export const allRangedWeapons = [
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
];
