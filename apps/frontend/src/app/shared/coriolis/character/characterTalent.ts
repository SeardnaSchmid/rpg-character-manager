import { AttributeType, BodyStatType, SkillType, SpecialDiceType } from '../../index';

export type UserInteractionFunctionType = () => boolean;

export enum TalentType {
  Blessing,
  CombatVeteran,
  Defensive,
}

export class CharacterTalent {
  name: string;
  type: TalentType;
  private _modifier: number;
  typeToBeModified: BodyStatType | SkillType | AttributeType | SpecialDiceType;
  defaultUserInput? = true;
  askForUserInput? = false;

  public constructor(init?: Partial<CharacterTalent>) {
    Object.assign(this, init);
  }

  userQuestionAtUse?: UserInteractionFunctionType = () => true;

  public getModifier(): number {
    if (this.askForUserInput) {
      // TODO Implement Dialog
      return this._modifier;
    } else {
      if (this.defaultUserInput) {
        // modifier can be applied
        return this._modifier;
      } else {
        // modifier does not apply because of the question
        return 0;
      }
    }
  }
}
