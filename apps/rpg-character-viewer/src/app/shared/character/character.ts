import { CharacterSkill } from '@viewer-app/shared';
import { CharacterAttribute } from '@viewer-app/shared';
import { CharacterItem } from '@viewer-app/shared/item/item';
import { CharacterBackground } from '@viewer-app/shared/';
import { CharacterName } from '@viewer-app/shared/';
import { CharacterBodyStat } from '@viewer-app/shared/';
import { CharacterTalents } from '@viewer-app/shared/';
import { CharacterGroupTalent } from '@viewer-app/shared/';
import { CharacterIconTalent } from '@viewer-app/shared/';
import { updateBodyStats } from '@viewer-app/shared/coriolis/characterStatsHandling';

export class Character {
  background?: CharacterBackground;
  name?: CharacterName;

  attributes?: Array<CharacterAttribute>;
  bodyStats?: Array<CharacterBodyStat>;
  skills?: Array<CharacterSkill>;

  talents?: Array<CharacterTalents>;
  groupTalent?: CharacterGroupTalent;
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
