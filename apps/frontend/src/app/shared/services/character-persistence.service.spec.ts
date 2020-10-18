import { TestBed } from '@angular/core/testing';

import { CharacterPersistenceService } from './character-persistence.service';

describe('CharacterPersistenceService', () => {
  let service: CharacterPersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterPersistenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
