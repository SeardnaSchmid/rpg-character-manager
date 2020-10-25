import { Component, OnInit } from '@angular/core';
import { allCharacterMocksList, CoriolisCharacter } from '@viewer-app/shared';
import { CharacterPersistenceService } from '@viewer-app/shared/services/character-persistence.service';

@Component({
  selector: 'frontend-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
})
export class CharacterInfoComponent implements OnInit {
  public chars: CoriolisCharacter[];
  public isLoading: boolean;

  constructor(
    private readonly characterPersistenceService: CharacterPersistenceService
  ) {}

  async ngOnInit() {
    await this.resetCharacters();
  }

  public async resetCharacters() {
    this.isLoading = true;
    await this.characterPersistenceService.deleteAll();
    await this.characterPersistenceService.setList(allCharacterMocksList);
    this.chars = await this.characterPersistenceService.findAll();
    this.isLoading = false;
  }

  public async clearCharacters() {
    this.chars = [];
    await this.characterPersistenceService.deleteAll();
  }
}
