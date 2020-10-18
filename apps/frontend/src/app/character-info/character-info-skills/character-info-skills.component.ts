import { Component, Input, OnInit } from '@angular/core';
import { Dice } from '@viewer-app/shared/dice/dice';
import { DiceRollService } from '@viewer-app/dice-roll-modal/dice-roll.service';
import {
  CoriolisCharacter,
  CharacterSkill,
  CoriolisCoreControllsService,
} from '@viewer-app/shared';

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
  ) {}

  ngOnInit() {}

  onDiceRollPressed(skill: CharacterSkill) {
    const dice: Dice[] = this.coriolisCoreControllsService.rollSkill(
      skill.type,
      this.selectedCharacter
    );
    this.diceRollService.openDialog(skill, dice);
  }
}
