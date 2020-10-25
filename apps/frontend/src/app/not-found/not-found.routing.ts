import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@viewer-app/i18n';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: 'not-found', component: NotFoundComponent, data: { title: extract('Not Found') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class NotFoundRouting {}
