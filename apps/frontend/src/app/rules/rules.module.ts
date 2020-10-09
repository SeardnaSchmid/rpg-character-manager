import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@viewer-core';
import { SharedModule } from '@viewer-shared';
import { MaterialModule } from '@viewer-app/material.module';
import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { GmReferenceComponent } from '@viewer-app/rules/coriolis-rules';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    RulesRoutingModule,
  ],
  declarations: [RulesComponent, GmReferenceComponent],
})
export class RulesModule {}
