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
import { updateBodyStats } from '../characterStatsHandling';

export class Character {
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

  public constructor(init?: Partial<Character>) {
    Object.assign(this, init);
  }

  updateBodyStats() {
    updateBodyStats(this);
  }
}
