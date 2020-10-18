import { Component, OnInit } from '@angular/core';
import { CoriolisCharacter } from '@viewer-app/shared';
import { CharacterPersistenceService } from '@viewer-app/shared/services/character-persistence.service';

@Component({
  selector: 'viewer-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
})
export class CharacterInfoComponent implements OnInit {
  public chars: CoriolisCharacter[];

  constructor(
    private readonly characterPersistenceService: CharacterPersistenceService
  ) {}

  ngOnInit() {
    this.chars = this.characterPersistenceService.getAll();
  }
}
