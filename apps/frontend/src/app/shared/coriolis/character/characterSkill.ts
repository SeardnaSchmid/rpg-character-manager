import { AttributeType } from './characterAttribute';

export interface CharacterSkill {
  type: GeneralSkillType | AdvancedSkillType;
  value: number;
}

export enum AdvancedSkillType {
  Command = 'Command',
  Culture = 'Culture',
  DataDjinn = 'DataDjinn',
  Medicurgy = 'Medicurgy',
  MysticalPowers = 'MysticalPowers',
  Pilot = 'Pilot',
  Science = 'Science',
  Technology = 'Technology',
}

export const AdvancedSkillTypesList = [
  AdvancedSkillType.Command,
  AdvancedSkillType.Culture,
  AdvancedSkillType.DataDjinn,
  AdvancedSkillType.Medicurgy,
  AdvancedSkillType.MysticalPowers,
  AdvancedSkillType.Pilot,
  AdvancedSkillType.Science,
  AdvancedSkillType.Technology
];

export enum GeneralSkillType {
  Dexterity = 'Dexterity',
  Force = 'Force',
  Infiltration = 'Infiltration',
  Manipulation = 'Manipulation',
  MeleeCombat = 'MeleeCombat',
  Observation = 'Observation',
  RangedCombat = 'RangedCombat',
  Survival = 'Survival',
}

export const GeneralSkillsTypesList = [
  GeneralSkillType.Dexterity,
  GeneralSkillType.Force,
  GeneralSkillType.Infiltration,
  GeneralSkillType.Manipulation,
  GeneralSkillType.MeleeCombat,
  GeneralSkillType.Observation,
  GeneralSkillType.RangedCombat,
  GeneralSkillType.Survival,
];

/**
 * Returns the BaseAttributeType of a Skill
 * @param skill- the skill you want to convert
 */
export function GetBaseAttributeTypeOfSkill(
  skill: GeneralSkillType | AdvancedSkillType
): AttributeType {
  switch (skill) {
    case GeneralSkillType.Dexterity:
      return AttributeType.Agility;
    case GeneralSkillType.Force:
      return AttributeType.Strength;
    case GeneralSkillType.Infiltration:
      return AttributeType.Agility;
    case GeneralSkillType.Manipulation:
      return AttributeType.Empathy;
    case GeneralSkillType.MeleeCombat:
      return AttributeType.Strength;
    case GeneralSkillType.Observation:
      return AttributeType.Wits;
    case GeneralSkillType.RangedCombat:
      return AttributeType.Agility;
    case GeneralSkillType.Survival:
      return AttributeType.Wits;
    case AdvancedSkillType.Command:
      return AttributeType.Empathy;
    case AdvancedSkillType.Culture:
      return AttributeType.Empathy;
    case AdvancedSkillType.DataDjinn:
      return AttributeType.Wits;
    case AdvancedSkillType.Medicurgy:
      return AttributeType.Wits;
    case AdvancedSkillType.MysticalPowers:
      return AttributeType.Empathy;
    case AdvancedSkillType.Pilot:
      return AttributeType.Agility;
    case AdvancedSkillType.Science:
      return AttributeType.Wits;
    case AdvancedSkillType.Technology:
      return AttributeType.Wits;
    default:
      throw new Error('Invalid Input Skill');
  }
}
