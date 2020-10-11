import {
  GetBaseAttributeTypeOfSkill,
  GeneralSkillType,
  AdvancedSkillType,
  AdvancedSkillTypesList,
  GeneralSkillsTypesList,
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
} from '@viewer-app/shared/coriolis/character/item';
import * as _ from 'lodash';
import { BodyStatType, SpecialDiceType } from '@viewer-app/shared';

export class CoriolisRoll {
  /**
   * rolls a number of dice and returns the dice array
   * @param numberOfDiceToRoll the amount of dice to roll
   */
  public static rollNumberOfDice(
    numberOfDiceToRoll: number,
    allDiceResultModifier: number = 0
  ): Dice[] {
    const dice: Dice[] = [];
    for (let i = 0; i < numberOfDiceToRoll; i++) {
      dice[i] = new Dice().roll(allDiceResultModifier);
    }
    return dice;
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param skill - the skilltype to roll
   * @param character the Character which provides stats
   * @param diceResultModifier - manual modifications for the roll
   */
  public static rollInitative(
    character: Character,
    diceResultModifier: number = 0
  ): Dice[] {
    const numberDiceForInitiativeRoll = 1;
    const equipedItemWeapons: ItemWeapon[] = character.equipedItems.filter(
      (item) => item.getItemClassType() === 'itemWeapon'
    ) as ItemWeapon[];

    // TODO implement feature bonus aggregation
    const equipedItemsInitBonus = equipedItemWeapons.reduce(
      (p, item) => p + item.initModifier,
      0
    );
    return CoriolisRoll.rollNumberOfDice(
      numberDiceForInitiativeRoll,
      equipedItemsInitBonus + diceResultModifier
    );
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param skillType - the skilltype to roll
   * @param character the Character which provides stats
   * @param manualDiceModifier - manual modifications for the roll
   */
  public static rollSkill(
    skillType: GeneralSkillType | AdvancedSkillType,
    character: Character,
    manualDiceModifier: number = 0
  ): Dice[] {
    const toBeRolledSkill = character.skills.find(
      (characterSkills) => characterSkills.type === skillType
    );
    const isAdvancedSkill = AdvancedSkillTypesList.includes(skillType as any);
    const isGeneralSkill = GeneralSkillsTypesList.includes(skillType as any);

    // Early Exit
    // If a skill is advanced and no knowledge is there, there is simply no success possible
    // Advanced Skills p.63
    if (toBeRolledSkill.value === 0 && isAdvancedSkill) {
      return CoriolisRoll.rollNumberOfDice(0);
    }

    const numberOfDiceToRoll = CoriolisRoll.countDiceForSkillRoll(
      toBeRolledSkill.type,
      character
    );

    return CoriolisRoll.rollNumberOfDice(
      Math.max(numberOfDiceToRoll + manualDiceModifier, 0)
    );
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
      CoriolisRoll.countDiceForAttributeRoll(attribute, character) +
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
    // check if item exists on character
    if (!character.equipedItems.includes(item)) {
      throw Error(
        `Can't find item ${JSON.stringify(
          item
        )} on Character equiped List: ${JSON.stringify(character.equipedItems)}`
      );
    }

    const numberOfDiceToRoll =
      CoriolisRoll.countDiceForItemRoll(item, character) + manualModifications;
    return CoriolisRoll.rollNumberOfDice(numberOfDiceToRoll);
  }

  private static countDiceForItemArmorRoll(
    item: ItemArmor,
    character: Character
  ) {
    let result = 0;
    result += this.countDiceForSkillRoll(item.baseSkill, character);
    return result;
  }

  private static countDiceForItemWeaponRoll(
    item: ItemWeapon,
    character: Character
  ) {
    let result = 0;
    result += this.countDiceForSkillRoll(item.baseSkill, character);
    result += item.bonusModifier;
    return result;
  }

  private static countDiceForItemGadgetRoll(
    item: ItemGadget,
    character: Character
  ) {
    let result = 0;
    result += this.countDiceForSkillRoll(item.baseSkill, character);
    return result;
  }

  /**
   * counts the number of dice we can use for the itemroll
   */
  private static countDiceForItemRoll(
    item: CharacterItem,
    character: Character
  ) {
    let result = 0;
    switch (item.getItemClassType()) {
      case ItemClassName.itemArmor:
        result = CoriolisRoll.countDiceForItemArmorRoll(
          item as ItemArmor,
          character
        );
        break;
      case ItemClassName.itemWeapon:
        result = CoriolisRoll.countDiceForItemWeaponRoll(
          item as ItemWeapon,
          character
        );
        break;
      case ItemClassName.itemGadget:
        result = CoriolisRoll.countDiceForItemGadgetRoll(
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
   * @param skillType to roll
   * @param character to supply the fields
   */
  private static countDiceForSkillRoll(
    skillType: GeneralSkillType | AdvancedSkillType,
    character: Character
  ): number {
    const toBeRolledSkill = character.skills.find(
      (characterSkills) => characterSkills.type === skillType
    );
    if (_.isNil(skillType) || _.isUndefined(toBeRolledSkill)) {
      throw Error(
        `Can't find any Skill of type: ${skillType} in the character skills. Available Skills ${JSON.stringify(
          character.skills
        )}`
      );
    }

    const skillBonusFromItemsAndTalents = CoriolisRoll.countItemAndTalentBonus(
      character,
      skillType
    );
    const skillBaseAttribute: AttributeType = GetBaseAttributeTypeOfSkill(
      skillType
    );
    const diceFromBaseAttribute = CoriolisRoll.countDiceForAttributeRoll(
      skillBaseAttribute,
      character
    );

    return (
      toBeRolledSkill.value +
      skillBonusFromItemsAndTalents +
      diceFromBaseAttribute
    );
  }

  private static countDiceForAttributeRoll(
    attributeType: AttributeType,
    character: Character
  ): number {
    const toBeRolledAttribute = character.attributes.find(
      (characterAttributes) => characterAttributes.type === attributeType
    );
    if (_.isNil(attributeType) || _.isUndefined(toBeRolledAttribute)) {
      throw Error(
        `Can't find any Skill of type: ${attributeType} in the character skills. Available Skills ${JSON.stringify(
          character.attributes
        )}`
      );
    }
    const bonusFromItemsAndTalents = this.countItemAndTalentBonus(
      character,
      attributeType
    );

    return toBeRolledAttribute.value + bonusFromItemsAndTalents;
  }

  private static countItemAndTalentBonus(
    character: Character,
    type:
      | AttributeType
      | GeneralSkillType
      | AdvancedSkillType
      | BodyStatType
      | SpecialDiceType
  ) {
    const bonusFromItems = character.equipedItems.reduce(
      (prev, item) =>
        prev +
        item.features
          .filter((feature) => feature.typeToBeModified === type)
          .reduce(
            (prev, feature) => prev + feature.getModifierFromUserInput(),
            0
          ),
      0
    );
    const bonusFromTalents = character.talents
      .filter((talent) => talent.typeToBeModified === type)
      .reduce((prev, talent) => prev + talent.getModifierFromUserInput(), 0);
    return bonusFromItems + bonusFromTalents;
  }
}
