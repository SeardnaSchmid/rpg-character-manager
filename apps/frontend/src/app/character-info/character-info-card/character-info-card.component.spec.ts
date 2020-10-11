import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoCardComponent } from './character-info-card.component';
import { MatCardModule } from '@angular/material/card';
import { CharacterInfoBasicsComponent } from '@viewer-app/character-info/character-info-basics/character-info-basics.component';

describe('CharacterInfoCardComponent', () => {
  let component: CharacterInfoCardComponent;
  let fixture: ComponentFixture<CharacterInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterInfoCardComponent, CharacterInfoBasicsComponent],
      imports: [MatCardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
