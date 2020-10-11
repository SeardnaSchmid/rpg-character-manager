import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@viewer-app/i18n';
import { ItemsComponent } from './items.component';
import { Shell } from '@viewer-app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/items', pathMatch: 'full' },
    { path: 'items', component: ItemsComponent, data: { title: extract('Items') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ItemsRoutingModule {}
