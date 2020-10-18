import { Injectable } from '@angular/core';
import { CoriolisCharacter } from '@viewer-app/shared/coriolis';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CharacterPersistenceService {
  private data = new Map<string, CoriolisCharacter>();

  constructor() {}

  public set(id: string, character: any) {
    if (this.data.has(id)) throw Error('Item already exists. Id collision');
    this.data.set(id, character);
  }

  public get(id: string): CoriolisCharacter {
    if (!this.data.has(id))
    return this.data.get(id);
  }

  public getAll(): CoriolisCharacter[] {
    return [...this.data.values()];
  }

  public delete(id: string) {
    if (this.data.has(id)) {
      this.data.delete(id);
    }
  }

  public deleteAll() {
    this.data.clear();
  }
  setList(allCharacters: CoriolisCharacter[]) {
    if (allCharacters.length <= 0) {
      return;
    }

    allCharacters.map(character => {
      this.set(v4(), character);
    })
  }

}
