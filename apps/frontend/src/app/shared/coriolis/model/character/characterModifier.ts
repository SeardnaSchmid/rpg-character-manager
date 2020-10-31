import { AdvancedSkillType, GeneralSkillType } from '../character/characterSkill';
import { AttributeType, BodyStatType, SpecialDiceType, TalentType } from '.';
import { ItemFeatureType } from './itemFeature';

export type UserInteractionFunctionType = () => boolean;

export class CharacterModifierSimple {
  public name: string;
  public typeToBeModified?: unknown = undefined;
  public getModifierFromUserInput?: () => number = () => 0;
}

export class CharacterModifier {
  // mandatory fields
  public name: string;
  public type: ItemFeatureType | TalentType;
  public modifier: number;
  public typeToBeModified: GeneralSkillType | AdvancedSkillType | AttributeType | SpecialDiceType | BodyStatType;
  public infoText?: string;

  // optional fields
  public defaultUserInput? = true;
  public askForUserInput? = false;

  public constructor(init?: Partial<CharacterModifier>) {
    Object.assign(this, init);
  }

  public userQuestionAtUse?: UserInteractionFunctionType = () => true;

  public getModifierFromUserInput?: () => number = () => {
    if (this.askForUserInput) {
      // TODO Implement Dialog popup
      return this.modifier;
    } else {
      if (this.defaultUserInput) {
        // modifier can be applied
        return this.modifier;
      } else {
        // modifier does not apply because of the question
        return 0;
      }
    }
  }
}
