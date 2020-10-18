import { Injectable } from '@angular/core';
import { Dice } from '@viewer-app/shared/dice/dice';
import {
  AdvancedSkillType,
  AdvancedSkillTypesList,
  AttributeType,
  BodyStatType,
  CoriolisCharacter,
  CharacterItem,
  DrainableStat,
  GeneralSkillsTypesList,
  GeneralSkillType,
  GetBaseAttributeTypeOfSkill,
  ItemArmor,
  ItemClassName,
  ItemGadget,
  ItemWeapon,
  SpecialDiceType
} from './model';
// import { baseDrainableStat } from '@viewer-app/shared/coriolis/characterMock';

@Injectable({
  providedIn: 'root',
})
export class CoriolisCoreControllsService {
  constructor() {}

  /**
   * rolls a number of dice and returns the dice array
   * @param numberOfDiceToRoll the amount of dice to roll
   */
  public rollNumberOfDice(
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
  public rollInitative(
    character: CoriolisCharacter,
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
    return this.rollNumberOfDice(
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
  public rollSkill(
    skillType: GeneralSkillType | AdvancedSkillType,
    character: CoriolisCharacter,
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
      return this.rollNumberOfDice(0);
    }

    const numberOfDiceToRoll = this.countDiceForSkillRoll(
      toBeRolledSkill.type,
      character
    );

    return this.rollNumberOfDice(
      Math.max(numberOfDiceToRoll + manualDiceModifier, 0)
    );
  }

  /**
   * rolls a single attribute and returns the successes and the dices
   * @param attribute - attribute to use
   * @param character which provides attributes
   * @param manualModifications - manual modifications for the roll
   */
  public rollAttribute(
    attribute: AttributeType,
    character: CoriolisCharacter,
    manualModifications: number = 0
  ): Dice[] {
    const numberOfDiceToRoll =
      this.countDiceForAttributeRoll(attribute, character) +
      manualModifications;
    return this.rollNumberOfDice(numberOfDiceToRoll);
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param item to be used for the roll
   * @param character the Character which provides stats
   * @param manualModifications - manual modifications for the roll
   */
  public rollItem(
    item: CharacterItem,
    character: CoriolisCharacter,
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
      this.countDiceForItemRoll(item, character) +
      manualModifications;
    return this.rollNumberOfDice(numberOfDiceToRoll);
  }

  public calculateEncumbarance(character, modifier: number = 0): DrainableStat {
    const characterEncumberance = character.bodyStats.find(bodystat => bodystat.type === BodyStatType.Encumbarance);
    const result = character.equipedItems.reduce((prev, item) => prev + item.weight, 0);
    return { ...characterEncumberance, current: result };
  }

  private countDiceForItemArmorRoll(item: ItemArmor, character: CoriolisCharacter) {
    let result = 0;
    result += this.countDiceForSkillRoll(item.baseSkill, character);
    return result;
  }

  private countDiceForItemWeaponRoll(item: ItemWeapon, character: CoriolisCharacter) {
    let result = 0;
    result += this.countDiceForSkillRoll(item.baseSkill, character);
    result += item.bonusModifier;
    return result;
  }

  private countDiceForItemGadgetRoll(item: ItemGadget, character: CoriolisCharacter) {
    let result = 0;
    result += this.countDiceForSkillRoll(item.baseSkill, character);
    return result;
  }

  /**
   * counts the number of dice we can use for the itemroll
   */
  private countDiceForItemRoll(item: CharacterItem, character: CoriolisCharacter) {
    let result = 0;
    switch (item.getItemClassType()) {
      case ItemClassName.itemArmor:
        result = this.countDiceForItemArmorRoll(
          item as ItemArmor,
          character
        );
        break;
      case ItemClassName.itemWeapon:
        result = this.countDiceForItemWeaponRoll(
          item as ItemWeapon,
          character
        );
        break;
      case ItemClassName.itemGadget:
        result = this.countDiceForItemGadgetRoll(
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
  private countDiceForSkillRoll(
    skillType: GeneralSkillType | AdvancedSkillType,
    character: CoriolisCharacter
  ): number {
    const toBeRolledSkill = character.skills.find(
      (characterSkills) => characterSkills.type === skillType
    );
    if (!!!skillType || !!!toBeRolledSkill) {
      throw Error(
        `Can't find any Skill of type: ${skillType} in the character skills. Available Skills ${JSON.stringify(
          character.skills
        )}`
      );
    }

    const skillBonusFromItemsAndTalents = this.countItemAndTalentBonus(
      character,
      skillType
    );
    const skillBaseAttribute: AttributeType = GetBaseAttributeTypeOfSkill(
      skillType
    );
    const diceFromBaseAttribute = this.countDiceForAttributeRoll(
      skillBaseAttribute,
      character
    );

    return (
      toBeRolledSkill.value +
      skillBonusFromItemsAndTalents +
      diceFromBaseAttribute
    );
  }

  private countDiceForAttributeRoll(
    attributeType: AttributeType,
    character: CoriolisCharacter
  ): number {
    const toBeRolledAttribute = character.attributes.find(
      (characterAttributes) => characterAttributes.type === attributeType
    );
    if (!!!attributeType || !!!toBeRolledAttribute) {
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

  private countItemAndTalentBonus(
    character: CoriolisCharacter,
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
