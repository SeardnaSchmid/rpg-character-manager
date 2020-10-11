import { AttributeType, BodyStatType, CharacterBodyStat, CharacterSkill, SkillType } from './character';
import { ItemFeature, ItemFeatureType } from './item/itemFeature';
import { ItemArmor, ItemGadget, ItemRange, ItemTechTier, ItemWeapon, ItemWeight } from './item/item';

export const attributesMock = [
  { type: AttributeType.Agility, value: 1 },
  { type: AttributeType.Wits, value: 1 },
  { type: AttributeType.Strength, value: 1 },
  { type: AttributeType.Empathy, value: 1 },
];
export const skillsMock: CharacterSkill[] = [
  { type: SkillType.Dexterity, value: 1 },
  { type: SkillType.MeleeCombat, value: 1 },
  { type: SkillType.RangedCombat, value: 1 },
  { type: SkillType.Observation, value: 1 },
];
export const observationFeatureMock: ItemFeature = new ItemFeature({
  userQuestionAtUse: () => true,
  name: 'observationFeatureMock',
  type: ItemFeatureType.custom,
  modifier: 10,
  typeToBeModified: SkillType.Observation,
  defaultUserInput: true,
  askForUserInput: true,
});
export const meleeFeatureMock = new ItemFeature({
  name: 'meleeFeatureMock',
  type: ItemFeatureType.custom,
  askForUserInput: false,
  typeToBeModified: SkillType.MeleeCombat,
  userQuestionAtUse: () => { return true },
  defaultUserInput: true,
});
export const gadgetMockObservation = new ItemGadget({
  name: 'gadgetMockObservation',
  amount: 1,
  features: [observationFeatureMock],
  baseSkill: SkillType.Observation,
});
export const gadgetMockMeleeCombat = new ItemGadget({
  name: 'gadgetMockMeleeCombat',
  baseSkill: SkillType.MeleeCombat,
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
  baseSkill: SkillType.MeleeCombat,
  features: [meleeFeatureMock],
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
