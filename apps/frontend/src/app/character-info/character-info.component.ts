import { Component } from '@angular/core';
import { Character } from '@viewer-app//shared/coriolis/character/character';
import { AttributeType } from '@viewer-app//shared/coriolis/character/characterAttribute';
import { GeneralSkillType } from '@viewer-app//shared/coriolis/character/characterSkill';
import { BodyStatType } from '@viewer-app//shared/coriolis/character/characterBodyStat';
import { CharacterOrigin } from '@viewer-app//shared/coriolis/character/characterBackground';
import { StarSystem } from '@viewer-app//shared/coriolis/starSystem/system';
import { items } from '@viewer-app//shared/coriolis/store/items/items';

@Component({
  selector: 'viewer-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
})
export class CharacterInfoComponent {

  constructor() {}

  char1: Character = new Character({
    name: {
      firstName: 'Arashar',
      nickName: 'badass',
      sureName: 'Abdullah al Ansari',
    },
    background: {
      origin: CharacterOrigin.Firstcome,
      homeSystem: StarSystem.Algol,
      xp: {
        spent: 5,
        free: 42,
      },
    },
    bodyStats: [
      { type: BodyStatType.Hitpoints, value: { maximum: 10, minimum: 0, current: 5 } },
      { type: BodyStatType.Mindpoints, value: { maximum: 10, minimum: 0, current: 10 } },
      { type: BodyStatType.Encumbarance, value: { maximum: 8, minimum: 0, current: 5 } },
      { type: BodyStatType.Reputation, value: { current: 10, minimum: 0 } },
      { type: BodyStatType.RadiationPoints, value: { current: 10, minimum: 0 } },
    ],
    attributes: [
      { type: AttributeType.Strength, value: 5 },
      { type: AttributeType.Agility, value: 2 },
      { type: AttributeType.Wits, value: 5 },
      { type: AttributeType.Empathy, value: 3 },
    ],
    skills: [
      { type: GeneralSkillType.Dexterity, value: 0 },
      { type: GeneralSkillType.Force, value: 3 },
      { type: GeneralSkillType.Infiltration, value: 0 },
      { type: GeneralSkillType.Manipulation, value: 0 },
      { type: GeneralSkillType.MeleeCombat, value: 5 },
      { type: GeneralSkillType.Observation, value: 1 },
      { type: GeneralSkillType.RangedCombat, value: 0 },
      { type: GeneralSkillType.Survival, value: 0 },
      { type: GeneralSkillType.Command, value: 0 },
      { type: GeneralSkillType.Culture, value: 1 },
      { type: GeneralSkillType.DataDjinn, value: 5 },
      { type: GeneralSkillType.Medicurgy, value: 0 },
      { type: GeneralSkillType.MysticalPowers, value: 0 },
      { type: GeneralSkillType.Pilot, value: 0 },
      { type: GeneralSkillType.Science, value: 1 },
      { type: GeneralSkillType.Technology, value: 3 },
    ],
    equipedItems: [
      items.weapons.melee.axe,
      items.weapons.melee.knife,
      items.quirkyStuff.jostersLangerPenis,
    ],
    spaceShipItems: [items.quirkyStuff.quantenFluxGenerator],
  });
}
