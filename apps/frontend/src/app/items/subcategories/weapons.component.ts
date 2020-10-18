import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { meleeWeaponsList, ItemWeapon } from '@viewer-app/shared';

@Component({
  selector: 'items-weapon',
  template: `
    <table
      mat-table
      [dataSource]="dataSourceWeapons"
      matSort
      class="mat-elevation-z8"
    >
      <!--        <ng-container matColumnDef="id">-->
      <!--          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>-->
      <!--          <td mat-cell *matCellDef="let element">{{ element.id }}</td>-->
      <!--        </ng-container>-->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>name</th>
        <td mat-cell *matCellDef="let element">
          {{ element.name | titlecase }}
        </td>
      </ng-container>
      <ng-container matColumnDef="itemSubCategory">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Sub-Category</th>
        <td mat-cell *matCellDef="let element">
          {{ element.itemSubCategory | titlecase }}
        </td>
      </ng-container>
      <ng-container matColumnDef="weight">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>weight</th>
        <td mat-cell *matCellDef="let element">{{ element.weight }}</td>
      </ng-container>
      <ng-container matColumnDef="bonus">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>bonus</th>
        <td mat-cell *matCellDef="let element">{{ element.bonus }}</td>
      </ng-container>
      <ng-container matColumnDef="init">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>init</th>
        <td mat-cell *matCellDef="let element">{{ element.init }}</td>
      </ng-container>
      <ng-container matColumnDef="damage">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>damage</th>
        <td mat-cell *matCellDef="let element">{{ element.damage }}</td>
      </ng-container>
      <ng-container matColumnDef="crit">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>crit</th>
        <td mat-cell *matCellDef="let element">{{ element.crit }}</td>
      </ng-container>
      <ng-container matColumnDef="range">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>range</th>
        <td mat-cell *matCellDef="let element">
          {{ element.range | titlecase }}
        </td>
      </ng-container>
      <ng-container matColumnDef="features">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>features</th>
        <td mat-cell *matCellDef="let element">
          <ng-container *ngFor="let feature of element.features">
            <span>{{ feature.name | titlecase }} </span>
          </ng-container>
        </td>
      </ng-container>
      <ng-container matColumnDef="techTier">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>techTier</th>
        <td mat-cell *matCellDef="let element">
          {{ element.techTier | titlecase }}
        </td>
      </ng-container>
      <ng-container matColumnDef="cost">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>cost</th>
        <td mat-cell *matCellDef="let element">{{ element.cost }}</td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumnsWeapons"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumnsWeapons"></tr>
    </table>
  `,
  styleUrls: ['../items.component.scss'],
})
export class ItemWeaponComponent implements AfterViewInit {
  public dataSourceWeapons = new MatTableDataSource<ItemWeapon>(
    Object.keys(meleeWeaponsList).map((key) => meleeWeaponsList[key])
  );

  @ViewChild(MatSort) sort: MatSort;

  displayedColumnsWeapons: string[] = [
    // 'id',
    'name',
    'itemSubCategory',
    // 'weight',
    'bonus',
    'init',
    'damage',
    'crit',
    'range',
    'features',
    'techTier',
    'cost',
  ];

  ngAfterViewInit() {
    this.dataSourceWeapons.sort = this.sort;
  }
}
