import {
  AdvancedSkillType,
  AttributeType,
  BodyStatType,
  CharacterBodyStat,
  CharacterModifier, CharacterOrigin,
  CharacterSkill, CoriolisCharacter, DrainableStat,
  GeneralSkillType
} from '../model/character';
import { ItemFeatureType } from '../model/character';
import { ItemArmor, ItemGadget, ItemRange, ItemTechTier, ItemWeapon, ItemWeight } from '../model/character/item';
import { StarSystem } from '@viewer-app/shared/coriolis/model/starSystem/system';

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
export const baseDrainableStat: DrainableStat = {current: 1, minimum: 0, maximum: 10};
export const baseBodyStatsMock: CharacterBodyStat[] = [
  {type: BodyStatType.Hitpoints, value: baseDrainableStat},
  {type: BodyStatType.Mindpoints, value: baseDrainableStat},
  {type: BodyStatType.Encumbarance, value: baseDrainableStat},
  {type: BodyStatType.RadiationPoints, value: baseDrainableStat},
  {type: BodyStatType.Reputation, value: baseDrainableStat},
]
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
export const characterArasharMock: CoriolisCharacter =   {
  "name": {
    "firstName": "Arashar",
    "nickName": "badass",
    "sureName": "Abdullah al Ansari"
  },
  "background": {
    "origin": CharacterOrigin.Firstcome,
    "homeSystem": StarSystem.Algol,
    "xp": {
      "spent": 5,
      "free": 42
    }
  },
  "bodyStats": [
    {
      "type": BodyStatType.Hitpoints,
      "value": { "maximum": 10, "minimum": 0, "current": 5 }
    },
    {
      "type": BodyStatType.Mindpoints,
      "value": { "maximum": 10, "minimum": 0, "current": 10 }
    },
    {
      "type": BodyStatType.Encumbarance,
      "value": { "maximum": 8, "minimum": 0, "current": 5 }
    },
    {
      "type": BodyStatType.Reputation,
      "value": { "current": 10, "minimum": 0 }
    },
    {
      "type": BodyStatType.RadiationPoints,
      "value": { "current": 10, "minimum": 0 }
    }
  ],
  "attributes": [
    { "type": AttributeType.Strength, "value": 5 },
    { "type": AttributeType.Agility, "value": 2 },
    { "type": AttributeType.Wits, "value": 5 },
    { "type": AttributeType.Empathy, "value": 3 }
  ],
  "skills": [
    { "type": GeneralSkillType.Dexterity, "value": 0 },
    { "type": GeneralSkillType.Force, "value": 3 },
    { "type": GeneralSkillType.Infiltration, "value": 0 },
    { "type": GeneralSkillType.Manipulation, "value": 0 },
    { "type": GeneralSkillType.MeleeCombat, "value": 5 },
    { "type": GeneralSkillType.Observation, "value": 1 },
    { "type": GeneralSkillType.RangedCombat, "value": 0 },
    { "type": GeneralSkillType.Survival, "value": 0 },
    { "type": AdvancedSkillType.Command, "value": 0 },
    { "type": AdvancedSkillType.Culture, "value": 1 },
    { "type": AdvancedSkillType.DataDjinn, "value": 5 },
    { "type": AdvancedSkillType.Medicurgy, "value": 0 },
    { "type": AdvancedSkillType.MysticalPowers, "value": 0 },
    { "type": AdvancedSkillType.Pilot, "value": 0 },
    { "type": AdvancedSkillType.Science, "value": 1 },
    { "type": AdvancedSkillType.Technology, "value": 3 }
  ],
  "equipedItems": [],
  "spaceShipItems": []
}

export const allCharacterMocksList: CoriolisCharacter[] = [
  characterArasharMock,
  characterArasharMock,
  characterArasharMock,
  characterArasharMock,
]
