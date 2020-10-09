import {
  CharacterSkill,
  GetBaseAttributeTypeOfSkill,
  SkillType,
} from '@viewer-app/shared/coriolis/character/characterSkill';
import { Character } from '@viewer-app/shared/coriolis/character/character';
import { Dice } from '@viewer-app/shared/dice/dice';
import { AttributeType } from '@viewer-app/shared/coriolis/character/characterAttribute';
import {
  CharacterItem,
  ItemArmor,
  ItemClassName,
  ItemGadget,
  ItemWeapon,
} from '@viewer-app/shared/coriolis/item/item';
import * as _ from 'lodash';
import { BodyStatType, SpecialDiceType } from '@viewer-app/shared';

export class CoriolisRoll {
  /**
   * rolls a number of dice and returns the dice array
   * @param numberOfDiceToRoll the amount of dice to roll
   */
  public static rollNumberOfDice(
    numberOfDiceToRoll: number,
    modifier: number = 0
  ): Dice[] {
    const dice: Dice[] = [];
    for (let i = 0; i < numberOfDiceToRoll; i++) {
      dice[i] = new Dice().roll(modifier);
    }
    return dice;
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param skill - the skilltype to roll
   * @param character the Character which provides stats
   * @param manualModifications - manual modifications for the roll
   */
  public static rollInitiative(
    character: Character,
    manualModifications: number = 0
  ): Dice[] {
    const numberDiceForInitiativeRoll = 1;
    const equipedItemWeapons: ItemWeapon[] = character.equipedItems.filter(
      (item) => item.getItemClassType() === 'itemWeapon'
    ) as ItemWeapon[];

    // TODO implement feature bonus aggregation
    const equipedItemsInitBonus = equipedItemWeapons.reduce(
      (p, item) => p + item.init,
      0
    );
    return CoriolisRoll.rollNumberOfDice(
      numberDiceForInitiativeRoll,
      equipedItemsInitBonus
    );
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param skill - the skilltype to roll
   * @param character the Character which provides stats
   * @param manualModifications - manual modifications for the roll
   */
  public static rollSkill(
    skill: SkillType,
    character: Character,
    manualModifications: number = 0
  ): Dice[] {
    const numberOfDiceToRoll =
      CoriolisRoll.countNumberOfDiceForSkill(skill, character) +
      manualModifications;
    return CoriolisRoll.rollNumberOfDice(numberOfDiceToRoll);
  }

  /**
   * rolls a single attribute and returns the successes and the dices
   * @param attribute - attribute to use
   * @param character which provides attributes
   * @param manualModifications - manual modifications for the roll
   */
  public static rollAttribute(
    attribute: AttributeType,
    character: Character,
    manualModifications: number = 0
  ): Dice[] {
    const numberOfDiceToRoll =
      CoriolisRoll.countAvailableDiceForAttribute(attribute, character) +
      manualModifications;
    return CoriolisRoll.rollNumberOfDice(numberOfDiceToRoll);
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param item to be used for the roll
   * @param character the Character which provides stats
   * @param manualModifications - manual modifications for the roll
   */
  public static rollItem(
    item: CharacterItem,
    character: Character,
    manualModifications: number = 0
  ): Dice[] {
    const numberOfDiceToRoll =
      CoriolisRoll.countNumberOfDiceForItemRoll(item, character) +
      manualModifications;
    return CoriolisRoll.rollNumberOfDice(numberOfDiceToRoll);
  }

  private static countNumberOfDiceForArmorRoll(
    item: ItemArmor,
    character: Character
  ) {
    let result = 0;
    result += this.countNumberOfDiceForSkill(item.baseSkill, character);
    return result;
  }

  private static countNumberOfDiceForWeaponRoll(
    item: ItemWeapon,
    character: Character
  ) {
    let result = 0;
    result += this.countNumberOfDiceForSkill(item.baseSkill, character);
    result += item.bonus;
    return result;
  }

  private static countNumberOfDiceForGadgetRoll(
    item: ItemGadget,
    character: Character
  ) {
    let result = 0;
    result += this.countNumberOfDiceForSkill(item.baseSkill, character);
    return result;
  }

  /**
   * counts the number of dice we can use for the itemroll
   */
  private static countNumberOfDiceForItemRoll(
    item: CharacterItem,
    character: Character
  ) {
    let result = 0;

    switch (item.getItemClassType()) {
      case ItemClassName.itemArmor:
        result = CoriolisRoll.countNumberOfDiceForArmorRoll(
          item as ItemArmor,
          character
        );
        break;

      case ItemClassName.itemWeapon:
        result = CoriolisRoll.countNumberOfDiceForWeaponRoll(
          item as ItemWeapon,
          character
        );
        break;

      case ItemClassName.itemGadget:
        result = CoriolisRoll.countNumberOfDiceForGadgetRoll(
          item as ItemGadget,
          character
        );
        break;

      default:
        throw Error('Invalid ItemClass');
    }

    return result;
  }

  /**
   * rolls an amound of dice equal to skill + baseattribute + itemModifier + TalentModifier
   * @param skill to roll
   * @param character to supply the fields
   */
  private static countNumberOfDiceForSkill(
    skill: SkillType,
    character: Character
  ): number {
    if (_.isNil(skill)) {
      return 0;
    }

    const usedSkill: CharacterSkill = character.skills.find(
      (item) => item.type === skill
    );
    const skillValue = usedSkill.value;

    const baseAttributeToUse: AttributeType = GetBaseAttributeTypeOfSkill(
      skill
    );
    const baseAttributeValue = CoriolisRoll.countAvailableDiceForAttribute(
      baseAttributeToUse,
      character
    );
    const itemModifierValue = CoriolisRoll.countItemModifierForSkill(
      skill,
      character
    );
    const talentModifierValue = CoriolisRoll.countTalentBonusForSkill(
      skill,
      character
    );

    return (
      skillValue + baseAttributeValue + itemModifierValue + talentModifierValue
    );
  }

  private static countBonusFromItemsAndTalents(character: Character, type: AttributeType | SkillType | BodyStatType | SpecialDiceType) {
    const bonusFromItems = character.equipedItems.reduce(
      (prev, item) =>
        prev +
        item.features
          .filter((feature) => feature.typeToBeModified === type)
          .reduce((prev, feature) => prev + feature.getModifier(), 0),
      0
    );
    const bonusFromTalents = character.talents
      .filter((talent) => talent.typeToBeModified === type)
      .reduce((prev, talent) => prev + talent.getModifier(), 0);
    return bonusFromItems + bonusFromTalents;
  }

  private static countItemModifierForSkill(
    skillType: SkillType,
    character: Character
  ): number {
    if (_.isNil(character.equipedItems)) {
      return 0;
    }
    const bonusFromItemsAndTalents = this.countBonusFromItemsAndTalents(character, skillType);
    const skill = character.skills.find((skill) => skill.type === skillType);
    const baseAttributeValue = this.countAvailableDiceForAttribute(skill.)
    return skill.value + bonusFromItemsAndTalents;
  }

  private static countAvailableDiceForAttribute(
    attributeType: AttributeType,
    character: Character
  ): number {
    const bonusFromItemsAndTalents = this.countBonusFromItemsAndTalents(character, attributeType);
    const attribute = character.attributes.find(
      (attribute) => attribute.type === attributeType
    );
    return attribute.value + bonusFromItemsAndTalents;
  }


  private static countTalentBonusForSkill(
    skill: SkillType,
    character: Character
  ): number {
    const talentBonusDice = 0;
    return talentBonusDice;
  }
}
