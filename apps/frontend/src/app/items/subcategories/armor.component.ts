import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SkillType } from '@viewer-app/shared';
import { items } from '@viewer-app/shared/coriolis/store/items/items';
import { ItemArmor, ItemWeapon } from '@viewer-app/shared/coriolis/item/item';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'items-armor',
  template: `
    <mat-card>
      <table mat-table [dataSource]="dataSourceWeapons" matSort class="mat-elevation-z8">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>
          <td mat-cell *matCellDef="let element">{{ element.id }}</td>
        </ng-container>
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>name</th>
          <td mat-cell *matCellDef="let element">{{ element.name | titlecase }}</td>
        </ng-container>
        <ng-container matColumnDef="weight">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>weight</th>
          <td mat-cell *matCellDef="let element">{{ element.weight }}</td>
        </ng-container>
        <ng-container matColumnDef="armorRating">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>armorRating</th>
          <td mat-cell *matCellDef="let element">{{ element.armorRating }}</td>
        </ng-container>
        <ng-container matColumnDef="features">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>features</th>
          <td mat-cell *matCellDef="let element">{{ element.features }}</td>
        </ng-container>
        <ng-container matColumnDef="techTier">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>techTier</th>
          <td mat-cell *matCellDef="let element">{{ element.techTier | titlecase }}</td>
        </ng-container>
        <ng-container matColumnDef="cost">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>cost</th>
          <td mat-cell *matCellDef="let element">{{ element.cost }}</td>
        </ng-container>
        <ng-container matColumnDef="extraFeaturesSlots">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>extraFeaturesSlots</th>
          <td mat-cell *matCellDef="let element">{{ element.extraFeaturesSlots }}</td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumnsWeapons"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumnsWeapons"></tr>
      </table>
    </mat-card>
  `,
  styleUrls: ['../items.component.scss'],
})
export class ItemArmorComponent implements AfterViewInit {
  public dataSourceWeapons = new MatTableDataSource<ItemArmor>(Object.keys(items.armor).map(key => items.armor[key]));

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSourceWeapons.sort = this.sort;
  }

  displayedColumnsWeapons: string[] = [
    'id',
    'name',
    'weight',
    'armorRating',
    'features',
    'techTier',
    'cost',
    'extraFeaturesSlots'
  ];
}
