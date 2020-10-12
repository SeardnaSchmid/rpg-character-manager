import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Character, CharacterItem } from '@viewer-app/shared';

@Component({
  selector: 'viewer-character-info-items',
  templateUrl: './character-info-items.component.html',
  styleUrls: ['./character-info-items.component.scss'],
})
export class CharacterInfoItemsComponent implements OnInit {
  @Input() selectedCharacter: Character;

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<CharacterItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
