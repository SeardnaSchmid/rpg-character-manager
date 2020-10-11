import { ItemFeatureType } from '../../character/itemFeature';
import {
  CharacterModifier,
  GeneralSkillType,
  SpecialDiceType,
} from '../../character';

const bulky: CharacterModifier = {
  name: 'bulky',
  type: ItemFeatureType.bulky,
  modifier: -2,
  typeToBeModified: GeneralSkillType.Dexterity,
};
const long: CharacterModifier = {
  name: 'long',
  type: ItemFeatureType.long,
  typeToBeModified: SpecialDiceType.Initiative,
  modifier: 2,
};
const small: CharacterModifier = {
  name: 'small',
  type: ItemFeatureType.small,
  typeToBeModified: GeneralSkillType.Dexterity,
  modifier: -2,
};
const thermostaticSuit: CharacterModifier = {
  name: 'thermostaticSuit',
  type: ItemFeatureType.thermostaticSuit,
  typeToBeModified: undefined,
  modifier: 0,
};
const vacuumSuit: CharacterModifier = {
  name: 'vacuumSuit',
  type: ItemFeatureType.vacuumSuit,
  typeToBeModified: undefined,
  modifier: 0,
};
const oxygenSupply: CharacterModifier = {
  name: 'oxygenSupply',
  type: ItemFeatureType.oxygenSupply,
  typeToBeModified: undefined,
  modifier: 0,
};
const reduceOneHitBy3: CharacterModifier = {
  name: 'reduceOneHitBy3',
  type: ItemFeatureType.reduceOneHitBy3,
  typeToBeModified: undefined,
  modifier: 0,
};
const reinforcedExoServos: CharacterModifier = {
  name: 'reinforcedExoServos',
  type: ItemFeatureType.reinforcedExoServos,
  typeToBeModified: undefined,
  modifier: 0,
};

export const feature = {
  bulky,
  long,
  small,
  thermostaticSuit,
  vacuumSuit,
  oxygenSupply,
  reduceOneHitBy3,
  reinforcedExoServos,
};
