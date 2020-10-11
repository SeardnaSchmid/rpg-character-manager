import { Character } from '@viewer-app/shared/coriolis/character/character';
import { Dice } from '@viewer-app/shared/dice/dice';
import { CoriolisRoll } from '@viewer-app/shared/coriolis/coriolisRoll';
import {
  baseAttributesMock,
  itemWeaponMockMelee,
  itemWeaponMockMelee2,
  baseSkillsMock
} from '@viewer-app/shared/coriolis/characterMock';
import { AttributeType, GeneralSkillType } from '@viewer-app/shared';

describe('CoriolisRoll', () => {
  let characterBaseMock: Character;

  beforeEach(() => {
    characterBaseMock = undefined;
  })

  describe('Constructor', () => {
    it('creates a Character Class with no information', () => {
      characterBaseMock = new Character();
      expect(characterBaseMock).toBeTruthy();
    });
  });

  describe('rollInitiative', () => {
    beforeEach(() => {
      characterBaseMock = new Character({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [],
        specialDices: [],
      });
    });

    it('should roll 1 dice for initiative', () => {
      const result: Dice[] = CoriolisRoll.rollInitative(characterBaseMock, 0);
      expect(result).toBeTruthy();
      expect(result.length).toEqual(1);
    });

    it('should roll 1 dice with a bonus of 10 to be above at least 11 as a result', () => {
      const result: Dice[] = CoriolisRoll.rollInitative(characterBaseMock, 10);
      expect(result.length).toEqual(1);
      expect(result[0].diceResult).toBeGreaterThanOrEqual(11);
    });

    it('should roll 1 dice with a bonus of 10 from a equiped weapon to be above at least 11 as a result', () => {
      const tmpCharacterMock = new Character(characterBaseMock);
      tmpCharacterMock.equipedItems = [itemWeaponMockMelee];
      const result: Dice[] = CoriolisRoll.rollInitative(tmpCharacterMock);
      expect(result.length).toEqual(1);
      expect(result[0].diceResult).toBeGreaterThanOrEqual(11);
    });
  });

  describe('rollAttribute', function () {
    beforeEach(function () {
      characterBaseMock = new Character({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [],
        specialDices: [],
      });
    });

    it('rolls strength with the expected number of dice', function () {
      const result: Dice[] = CoriolisRoll.rollAttribute(
        AttributeType.Strength,
        characterBaseMock
      );
      expect(result.length).toBe(1);
    });

    it('rolls strength with the expected number of dice and the modifier is applied', function () {
      const result: Dice[] = CoriolisRoll.rollAttribute(
        AttributeType.Strength,
        characterBaseMock,
        10
      );
      expect(result.length).toBe(11);
    });

    it('rolls strength with a item beeing a modifier', function () {
      const tmpCharacterMock = new Character(characterBaseMock);
      tmpCharacterMock.equipedItems;
      const result: Dice[] = CoriolisRoll.rollAttribute(
        AttributeType.Strength,
        characterBaseMock,
        10
      );
      expect(result.length).toBe(11);
    });
  });

  describe('rollSkill', () => {
    beforeEach(() => {
      characterBaseMock = new Character({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [],
      });
    });

    it('should roll 2 dice from base character mock 1 agi 1 dex', () => {
      const skillTestResult: Dice[] = CoriolisRoll.rollSkill(
        GeneralSkillType.Dexterity,
        characterBaseMock,
        0
      );
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(2);
    });

    it('should roll 12 dice from base character mock 1 agi 1 dex + 10 modifier', () => {
      const skillTestResult: Dice[] = CoriolisRoll.rollSkill(
        GeneralSkillType.Observation,
        characterBaseMock,
        10
      );
      expect(skillTestResult.length).toEqual(12);
    });

    it('should roll 0 dice from base character mock 1 agi 1 dex - 10 modifier', () => {
      const skillTestResult: Dice[] = CoriolisRoll.rollSkill(
        GeneralSkillType.Observation,
        characterBaseMock,
        -10
      );
      expect(skillTestResult.length).toEqual(0);
    });
  });

  describe('rollItem', () => {
    beforeEach(() => {
      characterBaseMock = undefined;
    });

    it('should roll 6 dice: 1 str 1 melee 3 weaponbonus 1 weapon feature = 6', () => {
      characterBaseMock = new Character({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [itemWeaponMockMelee],
      });

      const skillTestResult: Dice[] = CoriolisRoll.rollItem(
        itemWeaponMockMelee,
        characterBaseMock,
        0
      );
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(6);
    });

    it('should roll 3 dice: 1 str 1 melee 1 weaponbonus = 3', () => {
      characterBaseMock = new Character({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [itemWeaponMockMelee2],
      });

      const skillTestResult: Dice[] = CoriolisRoll.rollItem(
        itemWeaponMockMelee2,
        characterBaseMock,
        0
      );
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(3);
    });

    it('should throw error if it is tried to roll an item which is not equiped on the character', () => {
      characterBaseMock = new Character({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [itemWeaponMockMelee],
      });

      expect(() => CoriolisRoll.rollItem(
        itemWeaponMockMelee2,
        characterBaseMock,
        0
      )).toThrow(/^(Can't find item)/);
    });
  });
});
