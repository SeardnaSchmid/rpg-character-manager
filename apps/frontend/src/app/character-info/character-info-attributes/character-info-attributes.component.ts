import { Component, Input, OnInit } from '@angular/core';
import { DiceRollService } from '@viewer-app/dice-roll-modal/dice-roll.service';
import {
  CoriolisCharacter,
  CharacterAttribute,
  CoriolisCoreControllsService,
} from '@viewer-app/shared';
import { Dice } from '@viewer-app/shared/dice/dice';

@Component({
  selector: 'viewer-character-info-attributes',
  templateUrl: './character-info-attributes.component.html',
  styleUrls: ['./character-info-attributes.component.scss'],
})
export class CharacterInfoAttributesComponent implements OnInit {
  @Input() selectedCharacter: CoriolisCharacter;

  constructor(
    public diceRollService: DiceRollService,
    public coriolisCoreControllsService: CoriolisCoreControllsService
  ) {}

  ngOnInit() {}

  onDiceRollPressed(attribute: CharacterAttribute) {
    const dice: Dice[] = this.coriolisCoreControllsService.rollAttribute(
      attribute.type,
      this.selectedCharacter
    );
    this.diceRollService.openDialog(attribute, dice);
  }
}
