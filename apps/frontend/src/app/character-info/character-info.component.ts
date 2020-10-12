import { Component } from '@angular/core';
import {
  AdvancedSkillType,
  AttributeType,
  BodyStatType,
  Character,
  CharacterOrigin,
  GeneralSkillType
} from '@viewer-app/shared';
import { StarSystem } from '@viewer-app/shared/coriolis/model/starSystem/system';

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
      { type: AdvancedSkillType.Command, value: 0 },
      { type: AdvancedSkillType.Culture, value: 1 },
      { type: AdvancedSkillType.DataDjinn, value: 5 },
      { type: AdvancedSkillType.Medicurgy, value: 0 },
      { type: AdvancedSkillType.MysticalPowers, value: 0 },
      { type: AdvancedSkillType.Pilot, value: 0 },
      { type: AdvancedSkillType.Science, value: 1 },
      { type: AdvancedSkillType.Technology, value: 3 },
    ],
    equipedItems: [],
    spaceShipItems: [],
  });
}
