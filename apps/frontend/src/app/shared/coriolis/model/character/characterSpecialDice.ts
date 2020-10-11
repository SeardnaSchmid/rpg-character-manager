export interface CharacterSpecialDice {
  type: SpecialDiceType;
  value: number;
}

export enum SpecialDiceType {
  Initiative = 'Initiative'
}
