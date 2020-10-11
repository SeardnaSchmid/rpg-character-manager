import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@viewer-app/i18n';
import { RulesComponent } from './rules.component';
import { Shell } from '@viewer-app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/rules', pathMatch: 'full' },
    { path: 'rules', component: RulesComponent, data: { title: extract('Rules') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RulesRoutingModule {}
