import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { allCharacterMocksList, CoriolisCharacter } from '@viewer-app/shared';
import { ActivatedRoute } from '@angular/router';
import { CharacterPersistenceService } from '@viewer-app/shared/services/character-persistence.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'viewer-character-info-card',
  templateUrl: './character-info-card.component.html',
  styleUrls: ['./character-info-card.component.scss'],
})
export class CharacterInfoCardComponent implements OnInit {
  character: CoriolisCharacter;
  areAllOpen = true;
  isDelayFinished: boolean;
  isLoading: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private characterPersistenceService: CharacterPersistenceService
  ) {}

  async ngOnInit() {
    const selectedCharacterId: string = this.route.snapshot.params.id;
    this.character = await this.characterPersistenceService.findOneById(
      selectedCharacterId
    );
    if (!this.character) {
      this.router.navigateByUrl('/not-found', { replaceUrl: true });
    }
  }

  public async resetCharacters() {
    this.isLoading = true;
    await this.characterPersistenceService.deleteAll();
    await this.characterPersistenceService.setList(allCharacterMocksList);
    this.isLoading = false;
  }

  private characterFound(character: CoriolisCharacter) {
    !_.isNil(character);
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
