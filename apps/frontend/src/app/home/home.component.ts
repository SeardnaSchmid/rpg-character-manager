import { Component, OnInit } from '@angular/core';
import { CharacterPersistenceService } from '@viewer-app/shared/services/character-persistence.service';
import { CoriolisCharacter , allCharacterMocksList } from '@viewer-app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  chars: CoriolisCharacter[];
  isLoading = false;

  constructor(private readonly characterPersistenceService: CharacterPersistenceService) {}

  ngOnInit() {
    this.resetCharacters();
  }

  public resetCharacters(){
    this.isLoading = true;
    this.characterPersistenceService.deleteAll();
    this.characterPersistenceService.setList(allCharacterMocksList);
    this.chars = this.characterPersistenceService.getAll();
    this.isLoading = false;
  }
  public clearCharacters(){
    this.chars = [];
    this.characterPersistenceService.deleteAll();
  }
}
