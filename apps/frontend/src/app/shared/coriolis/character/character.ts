import {
  CharacterAttribute,
  CharacterBackground,
  CharacterBodyStat,
  CharacterGroupTalent,
  CharacterIconTalent,
  CharacterName,
  CharacterSkill,
  CharacterSpecialDice,
  CharacterTalent,
} from '../../index';
import { CharacterItem } from '../item/item';
import { updateBodyStats } from '../characterStatsHandling';

export class Character {
  background?: CharacterBackground;
  name?: CharacterName;

  attributes?: Array<CharacterAttribute>;
  bodyStats?: Array<CharacterBodyStat>;
  skills?: Array<CharacterSkill>;
  specialDices?: Array<CharacterSpecialDice>;

  groupTalent?: CharacterGroupTalent;
  talents?: Array<CharacterTalent>;
  iconTalent?: CharacterIconTalent;

  equipedItems?: Array<CharacterItem>;
  spaceShipItems?: Array<CharacterItem>;

  public constructor(init?: Partial<Character>) {
    Object.assign(this, init);
  }

  updateBodyStats() {
    updateBodyStats(this);
  }
}
