import { Component, Input } from '@angular/core';
import { CoriolisCharacter, CharacterConcept, CharacterGroupConcept, CharacterIcon, CharacterOrigin, CharacterUpbringing } from '@viewer-app/shared';
import { StarSystem } from '@viewer-app/shared/coriolis/model/starSystem/system';

@Component({
  selector: 'viewer-character-info-basics',
  templateUrl: './character-info-basics.component.html',
  styleUrls: ['./character-info-basics.component.scss'],
})
export class CharacterInfoBasicsComponent {
  @Input() character: CoriolisCharacter;
  characterOrigin = CharacterOrigin;
  characterHomeSystem = StarSystem;
  characterUpBringing = CharacterUpbringing;
  characterConcept = CharacterConcept;
  characterGroupConcept = CharacterGroupConcept;
  characterIcon = CharacterIcon;

  constructor() {}
}
