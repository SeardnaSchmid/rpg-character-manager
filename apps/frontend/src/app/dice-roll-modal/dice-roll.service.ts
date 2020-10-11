import { Injectable } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Dice } from '@viewer-app/shared/dice/dice';
import { DiceRollModalDialogData, DiceRollModalComponent } from '@viewer-app/dice-roll-modal/dice-roll-modal.component';
import { CharacterAttribute } from '@viewer-app/shared/coriolis/character/characterAttribute';
import { CharacterSkill } from '@viewer-app/shared/coriolis/character/characterSkill';

@Injectable({
  providedIn: 'root',
})
export class DiceRollService {
  constructor(public dialog: MatDialog) {}

  openDialog(source: CharacterSkill | CharacterAttribute, dice: Dice[]): void {
    const dataContainer: DiceRollModalDialogData = { source, dice };

    const dialogRef = this.dialog.open(DiceRollModalComponent, {
      width: '33%',
      data: dataContainer,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
