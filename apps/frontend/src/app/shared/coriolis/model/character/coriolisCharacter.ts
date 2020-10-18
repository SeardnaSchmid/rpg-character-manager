import {
  CharacterAttribute,
  CharacterBackground,
  CharacterBodyStat,
  CharacterGroupTalent,
  CharacterIconTalent,
  CharacterModifier,
  CharacterName,
  CharacterSkill,
  CharacterSpecialDice,
} from '../../index';
import { CharacterItem } from './item';

export class CoriolisCharacter {
  background?: CharacterBackground;
  name?: CharacterName;

  attributes?: Array<CharacterAttribute> = [];
  bodyStats?: Array<CharacterBodyStat> = [];
  skills?: Array<CharacterSkill> = [];
  specialDices?: Array<CharacterSpecialDice> = [];

  groupTalent?: CharacterGroupTalent;
  talents?: Array<CharacterModifier> = [];
  iconTalent?: CharacterIconTalent;

  equipedItems?: Array<CharacterItem> = [];
  spaceShipItems?: Array<CharacterItem> = [];

  public constructor(init?: Partial<CoriolisCharacter>) {
    Object.assign(this, init);
  }
}
