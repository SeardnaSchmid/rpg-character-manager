import { Component, OnInit } from '@angular/core';
import { GetBaseAttributeTypeOfSkill, SkillType } from '@viewer-app/shared';
import { EnumToArrayPipe } from '@viewer-app/shared/pipes/enumToArray.pipe';
import { EnumValues } from 'enum-values';

@Component({
  selector: 'coriolis-rules-gm-reference',
  template: `
    <mat-card>
      Basic Skills
      <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
        </ng-container>
        <ng-container matColumnDef="baseAttribute">
          <th mat-header-cell *matHeaderCellDef>Base Attribute</th>
          <td mat-cell *matCellDef="let element">
            {{ element.baseAttribute }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </mat-card>
  `,
  styleUrls: ['../rules.component.scss'],
})
export class GmReferenceComponent {
  constructor() {}

  allSkills = SkillType;
  displayedColumns: string[] = ['name', 'baseAttribute'];
  dataSource = EnumValues.getNames(
    SkillType
  ).map((skill) => ({
    name: skill,
    baseAttribute: GetBaseAttributeTypeOfSkill(SkillType[skill]),
  }));
}

