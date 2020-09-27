import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@viewer-app/shared/character/character';
import { Dice } from '@viewer-app/shared/dice/dice';
import { DiceRollService } from '@viewer-app/dice-roll-modal/dice-roll.service';
import { CharacterSkill } from '@viewer-app/shared/character/characterSkill';
import { CoriolisRoll } from '@viewer-app/shared/coriolis/coriolisRoll';

@Component({
  selector: 'viewer-character-info-skills',
  templateUrl: './character-info-skills.component.html',
  styleUrls: ['./character-info-skills.component.scss'],
})
export class CharacterInfoSkillsComponent implements OnInit {
  @Input() selectedCharacter: Character;

  constructor(public diceRollService: DiceRollService) {}

  ngOnInit() {}

  onDiceRollPressed(skill: CharacterSkill) {
    const dice: Dice[] = CoriolisRoll.rollSkill(skill.type, this.selectedCharacter);
    this.diceRollService.openDialog(skill, dice);
  }
}
