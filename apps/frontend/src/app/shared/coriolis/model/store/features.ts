import { ItemFeatureType } from '../character/itemFeature';
import { BodyStatType, CharacterModifier, GeneralSkillType, SpecialDiceType } from '../character';

export const bulky: CharacterModifier = {
  name: 'bulky',
  type: ItemFeatureType.bulky,
  modifier: -2,
  typeToBeModified: GeneralSkillType.Dexterity,
};
export const long: CharacterModifier = {
  name: 'long',
  type: ItemFeatureType.long,
  typeToBeModified: SpecialDiceType.Initiative,
  modifier: 2,
};
export const thermostaticSuit: CharacterModifier = {
  name: 'thermostaticSuit',
  type: ItemFeatureType.thermostaticSuit,
  typeToBeModified: undefined,
  modifier: 0,
};
export const vacuumSuit: CharacterModifier = {
  name: 'vacuumSuit',
  type: ItemFeatureType.vacuumSuit,
  typeToBeModified: undefined,
  modifier: 0,
};
export const oxygenSupply: CharacterModifier = {
  name: 'oxygenSupply',
  type: ItemFeatureType.oxygenSupply,
  typeToBeModified: undefined,
  modifier: 0,
};
export const reduceOneHitBy3: CharacterModifier = {
  name: 'reduceOneHitBy3',
  type: ItemFeatureType.reduceOneHitBy3,
  typeToBeModified: undefined,
  modifier: 0,
};
export const reinforcedExoServos: CharacterModifier = {
  name: 'reinforcedExoServos',
  type: ItemFeatureType.reinforcedExoServos,
  typeToBeModified: undefined,
  modifier: 0,
};
export const antiVehicle: CharacterModifier = {
  name: 'antiVehicle',
  type: ItemFeatureType.antiVehicle,
  typeToBeModified: undefined,
  modifier: 0,
};
export const cellPowered: CharacterModifier = {
  name: 'cellPowered',
  type: ItemFeatureType.cellPowered,
  typeToBeModified: undefined,
  modifier: 0,
};
export const mercurium: CharacterModifier = {
  name: 'mercurium',
  type: ItemFeatureType.mercurium,
  typeToBeModified: undefined,
  modifier: 0,
};
export const light: CharacterModifier = {
  name: 'light',
  type: ItemFeatureType.light,
  typeToBeModified: BodyStatType.Encumbarance,
  modifier: -0.5,
};
export const small: CharacterModifier = light;
export const heavy: CharacterModifier = {
  name: 'heavy',
  type: ItemFeatureType.heavy,
  typeToBeModified: BodyStatType.Encumbarance,
  modifier: 1,
};
