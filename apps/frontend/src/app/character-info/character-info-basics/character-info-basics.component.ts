import { Component, Input } from '@angular/core';
import { Character } from '@viewer-app/shared/coriolis/character/character';
import {
  CharacterConcept,
  CharacterGroupConcept,
  CharacterIcon,
  CharacterOrigin,
  CharacterUpbringing,
} from '@viewer-app/shared/coriolis/character/characterBackground';
import { StarSystem } from '@viewer-app/shared/coriolis/starSystem/system';

@Component({
  selector: 'viewer-character-info-basics',
  templateUrl: './character-info-basics.component.html',
  styleUrls: ['./character-info-basics.component.scss'],
})
export class CharacterInfoBasicsComponent {
  @Input() character: Character;
  characterOrigin = CharacterOrigin;
  characterHomeSystem = StarSystem;
  characterUpBringing = CharacterUpbringing;
  characterConcept = CharacterConcept;
  characterGroupConcept = CharacterGroupConcept;
  characterIcon = CharacterIcon;

  constructor() {}
}
