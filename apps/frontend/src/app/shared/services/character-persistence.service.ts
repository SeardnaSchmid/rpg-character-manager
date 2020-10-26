import { Injectable } from '@angular/core';
import {
  allCharacterMocksList,
  CoriolisCharacter
} from '@viewer-app/shared/coriolis';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CharacterPersistenceService {
  private data = new Map<string, CoriolisCharacter>();

  constructor() {
    this.setList(allCharacterMocksList);
  }

  public async create(
    character: CoriolisCharacter
  ): Promise<CoriolisCharacter> {
    if (!character.id) {
      character.id = v4();
    }
    this.data.set(character.id, character);
    return character;
  }

  public async findOneById(id: string): Promise<CoriolisCharacter> {
    return this.data.get(id);
  }

  public async findAll(): Promise<CoriolisCharacter[]> {
    return [...this.data.values()];
  }

  public deleteOneById(id: string): Promise<void> {
    if (this.data.has(id)) {
      this.data.delete(id);
    } else {
      throw new Error(`${id} does not exist in memory`);
    }
    return;
  }

  public deleteAll(): Promise<void> {
    this.data.clear();
    return;
  }

  async setList(allCharacters: CoriolisCharacter[]): Promise<void> {
    if (allCharacters.length <= 0) {
      return;
    }

    allCharacters.map(async (character) => {
      await this.create(character);
    });
    return;
  }
}
