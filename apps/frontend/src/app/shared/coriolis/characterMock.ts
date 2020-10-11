import {
  AdvancedSkillType,
  AttributeType,
  BodyStatType,
  CharacterBodyStat,
  CharacterModifier,
  CharacterSkill,
  GeneralSkillType
} from './character';
import { ItemFeatureType } from './character/itemFeature';
import { ItemArmor, ItemGadget, ItemRange, ItemTechTier, ItemWeapon, ItemWeight } from './character/item';

export const baseAttributesMock = [
  { type: AttributeType.Agility, value: 1 },
  { type: AttributeType.Wits, value: 1 },
  { type: AttributeType.Strength, value: 1 },
  { type: AttributeType.Empathy, value: 1 },
];
export const baseSkillsMock: CharacterSkill[] = [
  { type: GeneralSkillType.Dexterity, value: 1 }, // general skill
  { type: GeneralSkillType.MeleeCombat, value: 1 }, // general skill
  { type: GeneralSkillType.RangedCombat, value: 1 }, // general skill
  { type: GeneralSkillType.Observation, value: 1 }, // general skill
  { type: AdvancedSkillType.Technology, value: 1 }, // advanced skill
  { type: AdvancedSkillType.DataDjinn, value: 1 }, // advanced skill
];
export const observationFeatureMock: CharacterModifier = new CharacterModifier({
  userQuestionAtUse: () => true,
  name: 'observationFeatureMock',
  type: ItemFeatureType.custom,
  modifier: 10,
  typeToBeModified: GeneralSkillType.Observation,
  defaultUserInput: true,
  askForUserInput: true,
});
export const meleeFeatureMock = new CharacterModifier({
  name: 'meleeFeatureMock',
  type: ItemFeatureType.custom,
  askForUserInput: false,
  modifier: 1,
  typeToBeModified: GeneralSkillType.MeleeCombat,
  userQuestionAtUse: () => { return true },
  defaultUserInput: true,
});

export const gadgetMockObservation = new ItemGadget({
  name: 'gadgetMockObservation',
  amount: 1,
  features: [observationFeatureMock],
  baseSkill: GeneralSkillType.Observation,
});
export const gadgetMockMeleeCombat = new ItemGadget({
  name: 'gadgetMockMeleeCombat',
  baseSkill: GeneralSkillType.MeleeCombat,
  features: [observationFeatureMock],
});
export const itemWeaponMockMelee = new ItemWeapon({
  name: 'itemWeaponMockMelee',
  initModifier: 10,
  bonusModifier: 3,
  blastPower: 0,
  weight: ItemWeight.normal,
  cost: 10,
  techTier: ItemTechTier.mysterious,
  range: ItemRange.extreme,
  baseSkill: GeneralSkillType.MeleeCombat,
  features: [meleeFeatureMock],
});

export const itemWeaponMockMelee2 = new ItemWeapon({
  name: 'itemWeaponMockMelee2',
  initModifier: 0,
  bonusModifier: 1,
  weight: ItemWeight.normal,
  cost: 10,
  techTier: ItemTechTier.mysterious,
  range: ItemRange.close,
  baseSkill: GeneralSkillType.MeleeCombat,
  features: [],
});
export const itemArmorMock = new ItemArmor({
  name: 'itemArmorMock',
});
export const testEncumbaranceBodyStat: CharacterBodyStat = {
  type: BodyStatType.Encumbarance,
  value: {
    current: 0,
    minimum: 0,
    maximum: 0,
  },
};
export const item1 = new ItemGadget({
  name: 'testItem',
  amount: 1,
  features: [observationFeatureMock],
  baseSkill: GeneralSkillType.Observation,
});
