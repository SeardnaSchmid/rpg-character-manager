import { ItemArmor, ItemArmorSubCategory, ItemTechTier } from '../../character/item';
import { v4 } from 'uuid';
import {
  ablativeArmor,
  bulkyArmor,
  oxygenSupply,
  reinforcedExoServos,
  thermostaticSuit,
  vacuumSuit
} from '../features';

export const lightPrimitiveArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Light primitive armor',
  itemSubCategory: ItemArmorSubCategory.armor,
  armorRating: 2,
  features: [bulkyArmor],
  techTier: ItemTechTier.primitive,
  cost: 300,
  extraFeaturesSlots: 0,
});
export const heavyPrimitiveArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Heavy primitive armor',
  itemSubCategory: ItemArmorSubCategory.armor,
  armorRating: 3,
  features: [bulkyArmor],
  techTier: ItemTechTier.primitive,
  cost: 600,
  extraFeaturesSlots: 0,
});
export const flightsuit: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Flight suit',
  itemSubCategory: ItemArmorSubCategory.armor,
  armorRating: 1,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 500,
  extraFeaturesSlots: 0,
});
export const protectiveClothing: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Protective Clothing',
  itemSubCategory: ItemArmorSubCategory.armor,
  armorRating: 3,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 1000,
  extraFeaturesSlots: 0,
});
export const exoShell: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Exo shell',
  itemSubCategory: ItemArmorSubCategory.exo,
  armorRating: 2,
  features: [bulkyArmor, thermostaticSuit, vacuumSuit, oxygenSupply],
  techTier: ItemTechTier.ordinary,
  cost: 2000,
  extraFeaturesSlots: 0,
});
export const reinforcedExoShell: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Reinforced exo shell',
  itemSubCategory: ItemArmorSubCategory.exo,
  armorRating: 3,
  features: [bulkyArmor, thermostaticSuit, vacuumSuit, oxygenSupply],
  techTier: ItemTechTier.ordinary,
  cost: 3000,
  extraFeaturesSlots: 1,
});
export const lightArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Light armor',
  itemSubCategory: ItemArmorSubCategory.armor,
  armorRating: 4,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 5500,
  extraFeaturesSlots: 1,
});
export const heavyArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Heavy armor',
  itemSubCategory: ItemArmorSubCategory.armor,
  armorRating: 6,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 10000,
  extraFeaturesSlots: 1,
});
export const ablativePads: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Ablative pads',
  itemSubCategory: ItemArmorSubCategory.armor,
  armorRating: 0,
  features: [ablativeArmor],
  techTier: ItemTechTier.advanced,
  isRestricted: true,
  cost: 2000,
  extraFeaturesSlots: 0,
});
export const armoredExo: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Armored exo',
  itemSubCategory: ItemArmorSubCategory.exo,
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
  itemSubCategory: ItemArmorSubCategory.exo,
  armorRating: 10,
  features: [thermostaticSuit, vacuumSuit, oxygenSupply, reinforcedExoServos],
  techTier: ItemTechTier.advanced,
  cost: 60000,
  extraFeaturesSlots: 5,
});
export const shield: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Shield',
  itemSubCategory: ItemArmorSubCategory.shield,
  armorRating: 2,
  features: [],
  techTier: ItemTechTier.primitive,
  cost: 100,
  extraFeaturesSlots: 0,
});
export const riotShield: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Riot shield',
  itemSubCategory: ItemArmorSubCategory.shield,
  armorRating: 4,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 500,
  extraFeaturesSlots: 0,
});
export const combatShield: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Combat shield',
  itemSubCategory: ItemArmorSubCategory.shield,
  armorRating: 6,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 800,
  extraFeaturesSlots: 0,
});

export const armorsList = {
  flightsuit,
  lightPrimitiveArmor,
  heavyPrimitiveArmor,
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
