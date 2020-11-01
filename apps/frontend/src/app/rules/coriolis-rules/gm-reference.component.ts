import { Component } from '@angular/core';
import { GeneralSkillType, GetBaseAttributeTypeOfSkill } from '@viewer-app/shared';

@Component({
  selector: 'frontend-coriolis-rules-gm-reference',
  template: `
    <!-- Coriolis GM Reference -->
    <div class="grid-container">
      <table mat-table [dataSource]="dataSource">
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

      <div class="row">
        <div class="col-lg-6">
          <table class="table table-sm table-sm-text">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">GENERAL SKILLS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dexterity (Agility)</td>
                <td>Melee Combat (Strength)</td>
              </tr>
              <tr>
                <td>Force (Strength)</td>
                <td>Observation (Wits)</td>
              </tr>
              <tr>
                <td>Infiltration (Agility)</td>
                <td>Ranged Combat (Agility)</td>
              </tr>
              <tr>
                <td>Manipulation (Empathy)</td>
                <td>Survival (Wits)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-6">
          <table class="table table-sm table-sm-text">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">ADVANCED SKILLS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Command (Empathy)</td>
                <td>Mystic Powers (Empathy)</td>
              </tr>
              <tr>
                <td>Culture (Empathy)</td>
                <td>Pilot (Agility)</td>
              </tr>
              <tr>
                <td>Data Djinn (Wits)</td>
                <td>Science (Wits)</td>
              </tr>
              <tr>
                <td>Medicurgy (Wits)</td>
                <td>Technology (Wits)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <table class="table table-sm table-sm-text">
            <thead class="thead-dark">
              <tr>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <thead class="thead-dark">
              <tr>
                <th>SLOW ACTIONS (3AP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Firing an aimed shot</td>
              </tr>
              <tr>
                <td>Firing full auto</td>
              </tr>
              <tr>
                <td>Administering first aid</td>
              </tr>
              <tr>
                <td>Tinkering with a gadget</td>
              </tr>
              <tr>
                <td>Activating a mystical power</td>
              </tr>
            </tbody>
            <thead class="thead-dark">
              <tr>
                <th>NORMAL ACTIONS (2 AP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Attacking in close combat</td>
              </tr>
              <tr>
                <td>Firing a normal shot</td>
              </tr>
              <tr>
                <td>Reloading a weapon</td>
              </tr>
              <tr>
                <td>Ramming with a vehicle</td>
              </tr>
            </tbody>
            <thead class="thead-dark">
              <tr>
                <th>FAST ACTIONS (1 AP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sprinting a short distance (typically ten meters)</td>
              </tr>
              <tr>
                <td>Taking cover</td>
              </tr>
              <tr>
                <td>
                  Hitting the ground (makes you harder to hit, see page 88)
                </td>
              </tr>
              <tr>
                <td>Getting up off the ground</td>
              </tr>
              <tr>
                <td>Drawing a weapon</td>
              </tr>
              <tr>
                <td>Picking up an item</td>
              </tr>
              <tr>
                <td>Parrying in close combat</td>
              </tr>
              <tr>
                <td>Making an attack of opportunity in close combat</td>
              </tr>
              <tr>
                <td>Making a quick shot</td>
              </tr>
              <tr>
                <td>Going into overwatch</td>
              </tr>
              <tr>
                <td>Getting into a vehicle</td>
              </tr>
              <tr>
                <td>Starting a vehicle</td>
              </tr>
              <tr>
                <td>Driving a vehicle</td>
              </tr>
            </tbody>
            <thead class="thead-dark">
              <tr>
                <th>FREE ACTIONS (0 AP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  A free action is really no action at all. Most are passive
                  dice rolls
                </td>
              </tr>
              <tr>
                <td>Using your armor against an attack</td>
              </tr>
              <tr>
                <td>Defending in an opposed roll</td>
              </tr>
              <tr>
                <td>A quick shout to a comrade</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-4">
          <table class="table table-sm table-sm-text">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">RANGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Close Range</td>
                <td>up to about 2 meters</td>
              </tr>
              <tr>
                <td>Short Range</td>
                <td>up to about 20 meters</td>
              </tr>
              <tr>
                <td>Long Range</td>
                <td>up to about 100 meters</td>
              </tr>
              <tr>
                <td>Extreme Range</td>
                <td>up to about 1 kilometer</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-sm table-sm-text">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">RANGED ATTACKS</th>
              </tr>
              <tr>
                <th>DISTANCE</th>
                <th>MODIFIER</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Close</td>
                <td>-3/+3</td>
              </tr>
              <tr>
                <td>Short</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Long</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>Extreme</td>
                <td>-2</td>
              </tr>
              <tr>
                <td>Beyond Weapon Range</td>
                <td>-3</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-sm table-sm-text">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">SNEAK ATTACKS AND AMBUSHES</th>
              </tr>
              <tr>
                <th>RANGE</th>
                <th>MODIFIER</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Close</td>
                <td>-2</td>
              </tr>
              <tr>
                <td>Short</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Long</td>
                <td>+2</td>
              </tr>
              <tr>
                <td>Extreme</td>
                <td>+4</td>
              </tr>
            </tbody>

            <tbody></tbody>
          </table>

          <table class="table table-sm table-sm-text">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">DIFFICULTY</th>
              </tr>
              <tr>
                <th>DIFFICULTY</th>
                <th>MODIFIER</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Child’s Play</td>
                <td>+3</td>
              </tr>
              <tr>
                <td>Effortless</td>
                <td>+2</td>
              </tr>
              <tr>
                <td>Easy</td>
                <td>+1</td>
              </tr>
              <tr>
                <td>Normal</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Demanding</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>Hard</td>
                <td>-2</td>
              </tr>
              <tr>
                <td>Insane</td>
                <td>-3</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-sm table-sm-text">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">LEVELS OF SUCCESS</th>
              </tr>
              <tr>
                <th>NUMBER OF SIXES</th>
                <th>LEVEL OF SUCCESS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-2</td>
                <td>Limited Success</td>
              </tr>
              <tr>
                <td>3+</td>
                <td>Critical Success</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-4">
          <table class="table table-sm table-sm-text">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">GAIN DARKNESS POINTS</th>
              </tr>
              <tr>
                <th>PC ACTION</th>
                <th>POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prays to the Icons for a reroll</td>
                <td>+1</td>
              </tr>
              <tr>
                <td>Uses mystic power</td>
                <td>+1</td>
              </tr>
              <tr>
                <td>Condition "Bad Stasis"</td>
                <td>+1</td>
              </tr>
              <tr>
                <td>Jumps out of stasis</td>
                <td>+3</td>
              </tr>
              <tr>
                <td>General, Group, or Icon talent</td>
                <td>+Varies</td>
              </tr>
            </tbody>
            <thead class="thead-dark">
              <tr>
                <th>SPACE TRAVEL ROUTE</th>
                <th>POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Well-trafficked route</td>
                <td>+1/week</td>
              </tr>
              <tr>
                <td>Lonely route</td>
                <td>+2/week</td>
              </tr>
              <tr>
                <td>Uncharted space</td>
                <td>+3/week</td>
              </tr>
            </tbody>
            <thead class="thead-dark">
              <tr>
                <th>TRAUMATIC EVENT</th>
                <th>POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Encounter the Dark</td>
                <td>+1-3</td>
              </tr>
              <tr>
                <td>Unnatural events</td>
                <td>+1-3</td>
              </tr>
              <tr>
                <td>Suffer torture</td>
                <td>+2</td>
              </tr>
              <tr>
                <td>Kill an innocent</td>
                <td>+3</td>
              </tr>
              <tr>
                <td>Torture someone</td>
                <td>+3</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-sm table-sm-text">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">SPEND DARKNESS POINTS</th>
              </tr>
              <tr>
                <th>NPC</th>
                <th>POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reroll</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>Defend in close combat (page 84)</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>Attack of opportunity (page 84)</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>Overwatch fire (page 84)</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>Take the initiative</td>
                <td>-1-3</td>
              </tr>
              <tr>
                <td>Reinforcements</td>
                <td>-1-3</td>
              </tr>
              <tr>
                <td>The power of Darkness (chapter 15)</td>
                <td>-Varies</td>
              </tr>
            </tbody>
            <thead class="thead-dark">
              <tr>
                <th>PC</th>
                <th>POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Empty clip or deplete cell</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>Personal problem (page 26)</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>Overheat weapon</td>
                <td>-2</td>
              </tr>
              <tr>
                <td>Shot interrupted, weapon jams</td>
                <td>-3</td>
              </tr>
              <tr>
                <td>Lost possession</td>
                <td>-3</td>
              </tr>
              <tr>
                <td>A Dark mind (chapter 14)</td>
                <td>-1-3</td>
              </tr>
            </tbody>
            <thead class="thead-dark">
              <tr>
                <th>ENVIRONMENT</th>
                <th>POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Innocent in danger</td>
                <td>-2</td>
              </tr>
              <tr>
                <td>Nature's wrath</td>
                <td>-1-3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- /Coriolis GM Reference -->

  `,
  styleUrls: ['../rules.component.scss'],
})
export class GmReferenceComponent {
  constructor() {}

  allSkills = GeneralSkillType;
  displayedColumns: string[] = [
    'name',
    'baseAttribute'
  ];
  dataSource = Object.keys(GeneralSkillType).map((skill) => ({
    name: skill,
    baseAttribute: GetBaseAttributeTypeOfSkill(GeneralSkillType[skill]),
  }));
}
