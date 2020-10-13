import {
  ItemArmor,
  ItemTechTier,
} from '../../character/item';
import { v4 } from 'uuid';
import {
  bulky,
  thermostaticSuit,
  vacuumSuit,
  oxygenSupply,
  reinforcedExoServos,
  reduceOneHitBy3,
} from '../features';

export const lightPrimitiveArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Light primitive armor',
  armorRating: 2,
  features: [bulky],
  techTier: ItemTechTier.primitive,
  cost: 300,
  extraFeaturesSlots: 0,
});
export const heavyPrimitiveArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Heavy primitive armor',
  armorRating: 3,
  features: [bulky],
  techTier: ItemTechTier.primitive,
  cost: 600,
  extraFeaturesSlots: 0,
});
export const flightsuit: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Flight suit',
  armorRating: 1,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 500,
  extraFeaturesSlots: 0,
});
export const protectiveClothing: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Protective Clothing',
  armorRating: 3,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 1000,
  extraFeaturesSlots: 0,
});
export const exoShell: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Exo shell',
  armorRating: 2,
  features: [bulky, thermostaticSuit, vacuumSuit, oxygenSupply],
  techTier: ItemTechTier.ordinary,
  cost: 2000,
  extraFeaturesSlots: 0,
});
export const reinforcedExoShell: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Reinforced exo shell',
  armorRating: 3,
  features: [bulky, thermostaticSuit, vacuumSuit, oxygenSupply],
  techTier: ItemTechTier.ordinary,
  cost: 3000,
  extraFeaturesSlots: 1,
});
export const lightArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Light armor',
  armorRating: 4,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 5500,
  extraFeaturesSlots: 1,
});
export const heavyArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Heavy armor',
  armorRating: 6,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 10000,
  extraFeaturesSlots: 1,
});
export const ablativePads: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Ablative pads',
  armorRating: 0,
  features: [reduceOneHitBy3],
  techTier: ItemTechTier.advanced,
  isRestricted: true,
  cost: 2000,
  extraFeaturesSlots: 0,
});
export const armoredExo: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Armored exo',
  armorRating: 9,
  features: [thermostaticSuit, vacuumSuit, oxygenSupply, reinforcedExoServos],
  techTier: ItemTechTier.advanced,
  isRestricted: true,
  cost: 25000,
  extraFeaturesSlots: 2,
});
export const battleExo: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Battle exo',
  armorRating: 10,
  features: [thermostaticSuit, vacuumSuit, oxygenSupply, reinforcedExoServos],
  techTier: ItemTechTier.advanced,
  cost: 60000,
  extraFeaturesSlots: 5,
});
export const shield: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Shield',
  armorRating: 2,
  features: [],
  techTier: ItemTechTier.primitive,
  cost: 100,
  extraFeaturesSlots: 0,
});
export const riotShield: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Riot shield',
  armorRating: 4,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 500,
  extraFeaturesSlots: 0,
});
export const combatShield: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Combat shield',
  armorRating: 6,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 800,
  extraFeaturesSlots: 0,
});

export const allArmors = {
  lightPrimitiveArmor,
  heavyPrimitiveArmor,
  flightsuit,
  protectiveClothing,
  exoShell,
  reinforcedExoShell,
  lightArmor,
  heavyArmor,
  ablativePads,
  armoredExo,
  battleExo,
  shield,
  riotShield,
  combatShield,
};
