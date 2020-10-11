import { ItemArmor, ItemTechTier, ItemWeapon, ItemWeight } from '../../../character/item';
import { v4 } from 'uuid';
import { ItemFeatureType } from '../../../character/itemFeature';

type ItemWeaponConstructorFunction = () => ItemWeapon;

const lightPrimitiveArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Light primitive armor',
  weight: ItemWeight.normal,
  armorRating: 2,
  features: [ItemFeatureType.bulky],
  techTier: ItemTechTier.primitive,
  cost: 300,
  extraFeaturesSlots: 0,
});
const heavyPrimitiveArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Heavy primitive armor',
  weight: ItemWeight.normal,
  armorRating: 3,
  features: [ItemFeatureType.bulky],
  techTier: ItemTechTier.primitive,
  cost: 600,
  extraFeaturesSlots: 0,
});
const flightsuit: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Flight suit',
  weight: ItemWeight.normal,
  armorRating: 1,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 500,
  extraFeaturesSlots: 0,
});
const protectiveClothing: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Protective Clothing',
  weight: ItemWeight.normal,
  armorRating: 3,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 1000,
  extraFeaturesSlots: 0,
});
const exoShell: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Exo shell',
  weight: ItemWeight.normal,
  armorRating: 2,
  features: [
    ItemFeatureType.bulky,
    ItemFeatureType.thermostaticSuit,
    ItemFeatureType.vacuumSuit,
    ItemFeatureType.oxygenSupply,
  ],
  techTier: ItemTechTier.ordinary,
  cost: 2000,
  extraFeaturesSlots: 0,
});
const reinforcedExoShell: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Reinforced exo shell',
  weight: ItemWeight.normal,
  armorRating: 3,
  features: [
    ItemFeatureType.bulky,
    ItemFeatureType.thermostaticSuit,
    ItemFeatureType.vacuumSuit,
    ItemFeatureType.oxygenSupply,
  ],
  techTier: ItemTechTier.ordinary,
  cost: 3000,
  extraFeaturesSlots: 1,
});
const lightArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Light armor',
  weight: ItemWeight.normal,
  armorRating: 4,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 5500,
  extraFeaturesSlots: 1,
});
const heavyArmor: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Heavy armor',
  weight: ItemWeight.normal,
  armorRating: 6,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 10000,
  extraFeaturesSlots: 1,
});
const ablativePads: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Ablative pads',
  weight: ItemWeight.normal,
  armorRating: 0,
  features: [ItemFeatureType.reduceOneHitBy3],
  techTier: ItemTechTier.advanced,
  isRestricted: true,
  cost: 2000,
  extraFeaturesSlots: 0,
});
const armoredExo: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Armored exo',
  weight: ItemWeight.normal,
  armorRating: 9,
  features: [
    ItemFeatureType.thermostaticSuit,
    ItemFeatureType.vacuumSuit,
    ItemFeatureType.oxygenSupply,
    ItemFeatureType.reinforcedExoServos
  ],
  techTier: ItemTechTier.advanced,
  isRestricted: true,
  cost: 25000,
  extraFeaturesSlots: 2,
});
const battleExo: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Battle exo',
  weight: ItemWeight.normal,
  armorRating: 10,
  features: [
    ItemFeatureType.thermostaticSuit,
    ItemFeatureType.vacuumSuit,
    ItemFeatureType.oxygenSupply,
    ItemFeatureType.reinforcedExoServos
  ],
  techTier: ItemTechTier.advanced,
  cost: 60000,
  extraFeaturesSlots: 5,
});
const shield: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Shield',
  weight: ItemWeight.heavy,
  armorRating: 2,
  features: [],
  techTier: ItemTechTier.primitive,
  cost: 100,
  extraFeaturesSlots: 0,
});
const riotShield: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Riot shield',
  weight: ItemWeight.heavy,
  armorRating: 4,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 500,
  extraFeaturesSlots: 0,
});
const combatShield: ItemArmor = new ItemArmor({
  id: v4(),
  name: 'Combat shield',
  weight: ItemWeight.heavy,
  armorRating: 6,
  features: [],
  techTier: ItemTechTier.ordinary,
  cost: 800,
  extraFeaturesSlots: 0,
});

export const armor = {
  lightPrimitiveArmor,
  heavyPrimitiveArmor,
  flightsuit,
  protectiveClothing,
  exoShell,
  reinforcedExoShell,
  lightArmor,
  heavyArmor,
  ablativePads,
  battleExo,
  shield,
  riotShield,
  combatShield,
};
