import { Character } from '@viewer-app/shared/coriolis/character/character';
import { AttributeType } from '@viewer-app/shared/coriolis/character/characterAttribute';
import { CharacterSkill, GeneralSkillType } from '@viewer-app/shared/coriolis/character/characterSkill';
import { Dice } from '@viewer-app/shared/dice/dice';
import { CoriolisRoll } from '@viewer-app/shared/coriolis/coriolisRoll';
import { ItemFeatureType } from '@viewer-app/shared/coriolis/character/itemFeature';
import {
  CharacterItem,
  ItemArmor,
  ItemGadget,
  ItemRange,
  ItemTechTier,
  ItemWeapon,
  ItemWeight,
} from '@viewer-app/shared/coriolis/character/item';
import { BodyStatType, CharacterBodyStat } from '@viewer-app/shared/coriolis/character/characterBodyStat';
import { CharacterModifier, CharacterSpecialDice } from '@viewer-app/shared';

describe('Character', () => {
  let testobject: Character;

  const testAttributes = [
    { type: AttributeType.Agility, value: 5 },
    { type: AttributeType.Wits, value: 3 },
    { type: AttributeType.Strength, value: 5 },
    { type: AttributeType.Empathy, value: 5 },
  ];
  const testSkills: CharacterSkill[] = [
    { type: GeneralSkillType.Dexterity, value: 5 },
    { type: GeneralSkillType.MeleeCombat, value: 5 },
    { type: GeneralSkillType.RangedCombat, value: 5 },
    { type: GeneralSkillType.Observation, value: 3 },
  ];
  const testFeatureObservation: CharacterModifier = new CharacterModifier({
    userQuestionAtUse: () => true,
    name: 'TestFeature',
    type: ItemFeatureType.custom,
    modifier: 10,
    typeToBeModified: GeneralSkillType.Observation,
    defaultUserInput: true,
    askForUserInput: true,
  });
  const item1 = new ItemGadget({
    name: 'testItem',
    amount: 1,
    features: [testFeatureObservation],
    baseSkill: GeneralSkillType.Observation,
  });
  const testMeleeFeature = new CharacterModifier({
    name: 'meleeBonus',
    type: ItemFeatureType.custom,
    modifier: 42,
    typeToBeModified: GeneralSkillType.MeleeCombat,
  });
  const itemMeleeWeapon = new ItemWeapon({
    name: 'testMeleeWeapon',
    bonusModifier: 3,
    blastPower: 0,
    weight: ItemWeight.normal,
    cost: 10,
    techTier: ItemTechTier.mysterious,
    range: ItemRange.extreme,
    baseSkill: GeneralSkillType.MeleeCombat,
    features: [testMeleeFeature],
  });
  const itemObservationGadget = new ItemGadget({
    name: 'testObservationGadget',
    baseSkill: GeneralSkillType.Observation,
    features: [testFeatureObservation],
  });
  const testItemArmor = new ItemArmor({
    name: 'testArmor',
  });
  const testEncumbaranceBodyStat: CharacterBodyStat = {
    type: BodyStatType.Encumbarance,
    value: {
      current: 0,
      minimum: 0,
      maximum: 0,
    },
  };

  const testItems: Array<CharacterItem> = [item1, itemMeleeWeapon, itemObservationGadget, testItemArmor];
  const testSpecialDice: Array<CharacterSpecialDice> = [];

  describe('Constructor', () => {
    it('creates a Character Class with no information', () => {
      testobject = new Character();
      expect(testobject).toBeTruthy();
    });
  });

  describe('rollAttribute', () => {
    const testAttribute = { type: AttributeType.Agility, value: 5 };

    beforeEach(() => {
      testobject = new Character({
        attributes: [testAttribute],
      });
    });

    it('should roll a attribute and return the amound of successes and the dice rolled', () => {
      const skillTestResult: Dice[] = CoriolisRoll.rollAttribute(AttributeType.Agility, testobject);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(5);
    });
  });

  describe('rollItem', () => {
    beforeEach(() => {
      testobject = new Character({
        attributes: testAttributes,
        skills: testSkills,
        equipedItems: testItems,
      });
    });

    it('should roll an attack with 5 str 5 melee 42 feature bonus and 3 weapon bonus', () => {
      const meleeWeapon = testobject.equipedItems.find((item) => item.name === 'testMeleeWeapon');
      const skillTestResult: Dice[] = CoriolisRoll.rollItem(meleeWeapon, testobject);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(55);
    });

    it(
      'should roll a testItem Gadget observation + item with observation feature 10 + 10 and 3 wits ' +
        'and 3 observation',
      () => {
        const testItem = testobject.equipedItems.find((item) => item.name === 'testObservationGadget');
        const skillTestResult: Dice[] = CoriolisRoll.rollItem(testItem, testobject);
        expect(skillTestResult).toBeTruthy();
        expect(skillTestResult.length).toEqual(26);
      }
    );

    it('should roll a testArmor with 0 dice, because there is no baseskill attached', () => {
      const testItem = testobject.equipedItems.find((item) => item.name === 'testArmor');
      const skillTestResult: Dice[] = CoriolisRoll.rollItem(testItem, testobject);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(0);
    });
  });

  describe('calculate Encumbarance', () => {
    beforeEach(() => {
      testobject = new Character({
        attributes: testAttributes,
        skills: testSkills,
        equipedItems: testItems,
        bodyStats: [testEncumbaranceBodyStat],
      });
    });

    it('should calculate the general encumbarance', () => {
      const encumbaranceBodyStat = testobject.bodyStats.find((item) => item.type === BodyStatType.Encumbarance);
      expect(encumbaranceBodyStat.value.current).toEqual(0);
      testobject.updateBodyStats();
      expect(encumbaranceBodyStat.value.current).toEqual(4);
    });
  });
});
