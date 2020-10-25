import { Component, Input, OnInit } from '@angular/core';
import { Dice } from '@viewer-app/shared/dice/dice';
import { DiceRollService } from '@viewer-app/dice-roll-modal/dice-roll.service';
import {
  AdvancedSkillType,
  CharacterSkill,
  CoriolisCharacter,
  CoriolisCoreControllsService,
  GeneralSkillType
} from '@viewer-app/shared';
import { EnumValues } from 'enum-values';

@Component({
  selector: 'viewer-character-info-skills',
  templateUrl: './character-info-skills.component.html',
  styleUrls: ['./character-info-skills.component.scss'],
})
export class CharacterInfoSkillsComponent implements OnInit {
  @Input() selectedCharacter: CoriolisCharacter;

  constructor(
    public diceRollService: DiceRollService,
    public coriolisCoreControllsService: CoriolisCoreControllsService
  ) {

  }

  ngOnInit() {}

  onDiceRollPressed(skill: CharacterSkill) {
    const dice: Dice[] = this.coriolisCoreControllsService.rollSkill(
      skill.type,
      this.selectedCharacter
    );
    this.diceRollService.openDialog(skill, dice);
  }

  getGeneralSkills(skills: CharacterSkill[]) {
    return skills.filter(skill => EnumValues.getNames(GeneralSkillType).includes(skill.type));
  }

  getAdvancedSkills(skills: CharacterSkill[]) {
    return skills.filter(skill => EnumValues.getNames(AdvancedSkillType).includes(skill.type));
  }
}
