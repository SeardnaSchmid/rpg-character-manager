import { ItemFeatureType } from '../character/index';
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
  infoText: "Light weapons only count as half an item in the character inventory\n" +
    "(page 27). They are also easier to carry concealed, requiring an\n" +
    "observation test for someone to spot the weapon."
};
export const small: CharacterModifier = light;
export const heavy: CharacterModifier = {
  name: 'heavy',
  type: ItemFeatureType.heavy,
  typeToBeModified: BodyStatType.Encumbarance,
  modifier: 1,
};

export const allFeatures = {
  bulky,
  long,
  thermostaticSuit,
  vacuumSuit,
  oxygenSupply,
  reduceOneHitBy3,
  reinforcedExoServos,
  antiVehicle,
  cellPowered,
  mercurium,
  light,
  small,
  heavy,
};
