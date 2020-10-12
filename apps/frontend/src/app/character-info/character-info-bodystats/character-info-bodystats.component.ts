import { Component, Input, OnInit } from '@angular/core';
import { BodyStatType, Character, getFormulaExplanation } from '@viewer-app/shared';

@Component({
  selector: 'viewer-character-info-bodystats',
  templateUrl: './character-info-bodystats.component.html',
  styleUrls: ['./character-info-bodystats.component.scss'],
})
export class CharacterInfoBodystatsComponent implements OnInit {
  @Input() character: Character;
  private getBodyStatExplanation: (bodyStatType: BodyStatType) => string;

  constructor() {
    this.getBodyStatExplanation = getFormulaExplanation;
  }

  ngOnInit() {}
}
