import { TestBed } from '@angular/core/testing';

import { CoriolisCoreControllsService } from './coriolis-core-controlls.service';
import {
  baseAttributesMock,
  baseBodyStatsMock,
  baseSkillsMock,
  itemWeaponMockMelee,
  itemWeaponMockMelee2,
} from '@viewer-app/shared/coriolis/mocks/characterMock';
import { Dice } from '@viewer-app/shared/dice/dice';
import {
  AttributeType,
  CoriolisCharacter,
  DrainableStat,
  GeneralSkillType,
} from '@viewer-app/shared';

describe('CoriolisCoreControllsService', () => {
  let service: CoriolisCoreControllsService;
  let characterBaseMock: CoriolisCharacter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoriolisCoreControllsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Constructor', () => {
    it('creates a Character Class with no information', () => {
      characterBaseMock = new CoriolisCharacter();
      expect(characterBaseMock).toBeTruthy();
    });
  });

  describe('rollInitiative', () => {
    beforeEach(() => {
      characterBaseMock = new CoriolisCharacter({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [],
        specialDices: [],
      });
    });

    it('should roll 1 dice for initiative', () => {
      const result: Dice[] = service.rollInitative(
        characterBaseMock,
        0
      );
      expect(result).toBeTruthy();
      expect(result.length).toEqual(1);
    });

    it('should roll 1 dice with a bonus of 10 to be above at least 11 as a result', () => {
      const result: Dice[] = service.rollInitative(
        characterBaseMock,
        10
      );
      expect(result.length).toEqual(1);
      expect(result[0].diceResult).toBeGreaterThanOrEqual(11);
    });

    it('should roll 1 dice with a bonus of 10 from a equiped weapon to be above at least 11 as a result', () => {
      const tmpCharacterMock = new CoriolisCharacter(characterBaseMock);
      tmpCharacterMock.equipedItems = [itemWeaponMockMelee];
      const result: Dice[] = service.rollInitative(
        tmpCharacterMock
      );
      expect(result.length).toEqual(1);
      expect(result[0].diceResult).toBeGreaterThanOrEqual(11);
    });
  });

  describe('rollAttribute', function () {
    beforeEach(function () {
      characterBaseMock = new CoriolisCharacter({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [],
        specialDices: [],
      });
    });

    it('rolls strength with the expected number of dice', function () {
      const result: Dice[] = service.rollAttribute(
        AttributeType.Strength,
        characterBaseMock
      );
      expect(result.length).toBe(1);
    });

    it('rolls strength with the expected number of dice and the modifier is applied', function () {
      const result: Dice[] = service.rollAttribute(
        AttributeType.Strength,
        characterBaseMock,
        10
      );
      expect(result.length).toBe(11);
    });

    it('rolls strength with a item beeing a modifier', function () {
      const tmpCharacterMock = new CoriolisCharacter(characterBaseMock);
      tmpCharacterMock.equipedItems;
      const result: Dice[] = service.rollAttribute(
        AttributeType.Strength,
        characterBaseMock,
        10
      );
      expect(result.length).toBe(11);
    });
  });

  describe('rollSkill', () => {
    beforeEach(() => {
      characterBaseMock = new CoriolisCharacter({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [],
      });
    });

    it('should roll 2 dice from base character mock 1 agi 1 dex', () => {
      const skillTestResult: Dice[] = service.rollSkill(
        GeneralSkillType.Dexterity,
        characterBaseMock,
        0
      );
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(2);
    });

    it('should roll 12 dice from base character mock 1 agi 1 dex + 10 modifier', () => {
      const skillTestResult: Dice[] = service.rollSkill(
        GeneralSkillType.Observation,
        characterBaseMock,
        10
      );
      expect(skillTestResult.length).toEqual(12);
    });

    it('should roll 0 dice from base character mock 1 agi 1 dex - 10 modifier', () => {
      const skillTestResult: Dice[] = service.rollSkill(
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

    it('should roll 6 dice: 1 str 1 meleeWeapons 3 weaponbonus 1 weapon feature = 6', () => {
      characterBaseMock = new CoriolisCharacter({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [itemWeaponMockMelee],
      });

      const skillTestResult: Dice[] = service.rollItem(
        itemWeaponMockMelee,
        characterBaseMock,
        0
      );
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(6);
    });

    it('should roll 3 dice: 1 str 1 meleeWeapons 1 weaponbonus = 3', () => {
      characterBaseMock = new CoriolisCharacter({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [itemWeaponMockMelee2],
      });

      const skillTestResult: Dice[] = service.rollItem(
        itemWeaponMockMelee2,
        characterBaseMock,
        0
      );
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(3);
    });

    it('should throw error if it is tried to roll an item which is not equiped on the character', () => {
      characterBaseMock = new CoriolisCharacter({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        equipedItems: [itemWeaponMockMelee],
      });

      expect(() =>
        service.rollItem(
          itemWeaponMockMelee2,
          characterBaseMock,
          0
        )
      ).toThrow(/^(Can't find item)/);
    });
  });

  describe('calculateEncumbarance', () => {
    beforeEach(() => {
      characterBaseMock = new CoriolisCharacter({
        attributes: baseAttributesMock,
        skills: baseSkillsMock,
        bodyStats: baseBodyStatsMock,
        equipedItems: [itemWeaponMockMelee],
      });
    });

    it('should calculate the general encumbarance', () => {
      const result: DrainableStat = service.calculateEncumbarance(
        characterBaseMock
      );
      expect(result.current).toEqual(1);
    });

    it('should calculate the general encumbarance', () => {
      const tmpChar = new CoriolisCharacter(characterBaseMock);
      tmpChar.equipedItems = [itemWeaponMockMelee, itemWeaponMockMelee, itemWeaponMockMelee];
      const result: DrainableStat = service.calculateEncumbarance(
        tmpChar
      );
      expect(result.current).toEqual(3);
    });
  });
});
