import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoriolisCharacter } from '@viewer-app/shared';
import { ActivatedRoute } from '@angular/router';
import { CharacterPersistenceService } from '@viewer-app/shared/services/character-persistence.service';

@Component({
  selector: 'viewer-character-info-card',
  templateUrl: './character-info-card.component.html',
  styleUrls: ['./character-info-card.component.scss'],
})
export class CharacterInfoCardComponent implements OnInit {
  character: CoriolisCharacter;
  areAllOpen = true;

  constructor(private route: ActivatedRoute, private _snackBar: MatSnackBar, private characterPersistenceService: CharacterPersistenceService) {}

  async ngOnInit() {
    const selectedCharacterId = this.route.snapshot.url[1].toString();
    this.character = await this.characterPersistenceService.findOneById(selectedCharacterId);
  }

  onToggleAll() {
    this.areAllOpen = !this.areAllOpen;
  }

  onSaveCharacter() {
    const result = this.character.equipedItems;
    this._snackBar.open(JSON.stringify(result), 'close', {
      duration: 10000,
    });
  }
  characterGainXP(number: number) {
    this.character.background.xp.free += number;
  }

  characterSpendXP(number: number) {
    if (this.character.background.xp.free < number) {
      this._snackBar.open(`Not enough free XP to buy an advance`, 'close', {
        duration: 3000,
      });
    } else {
      this.character.background.xp.free -= number;
      this.character.background.xp.spent += number;
    }
  }
}
