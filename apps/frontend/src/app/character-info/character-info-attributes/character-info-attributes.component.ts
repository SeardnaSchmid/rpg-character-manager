import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@viewer-app/shared/coriolis/character/character';
import { DiceRollService } from '@viewer-app/dice-roll-modal/dice-roll.service';
import { Dice } from '@viewer-app/shared/dice/dice';
import { CharacterAttribute } from '@viewer-app/shared/coriolis/character/characterAttribute';
import { CoriolisRoll } from '@viewer-app/shared/coriolis/coriolisRoll';

@Component({
  selector: 'viewer-character-info-attributes',
  templateUrl: './character-info-attributes.component.html',
  styleUrls: ['./character-info-attributes.component.scss'],
})
export class CharacterInfoAttributesComponent implements OnInit {
  @Input() selectedCharacter: Character;

  constructor(public diceRollService: DiceRollService) {}

  ngOnInit() {}

  onDiceRollPressed(attribute: CharacterAttribute) {
    const dice: Dice[] = CoriolisRoll.rollAttribute(attribute.type, this.selectedCharacter);
    this.diceRollService.openDialog(attribute, dice);
  }
}
