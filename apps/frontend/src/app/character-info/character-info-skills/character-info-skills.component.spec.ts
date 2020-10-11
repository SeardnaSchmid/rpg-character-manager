import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoSkillsComponent } from './character-info-skills.component';
import { MaterialModule } from '@viewer-app/material.module';
import { CoreModule } from '@viewer-app/@core';
import { SharedModule } from '@viewer-shared';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoriolisCoreControllsService } from '@viewer-app/shared';

describe('CharacterInfoSkillsComponent', () => {
  let component: CharacterInfoSkillsComponent;
  let fixture: ComponentFixture<CharacterInfoSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        CoreModule,
        SharedModule,
        HttpClientTestingModule,
      ],
      providers: [ CoriolisCoreControllsService ],
      declarations: [CharacterInfoSkillsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoSkillsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
