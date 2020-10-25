import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@viewer-app/material.module';
import { NotFoundRouting } from './not-found.routing';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, NotFoundRouting],
  declarations: [NotFoundComponent],
})
export class NotFoundModule {}
