import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@viewer-core';
import { SharedModule } from '@viewer-shared';
import { MaterialModule } from '@viewer-app/material.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import {
  ItemArmorComponent,
  ItemRangedWeaponComponent,
  ItemMeleeWeaponComponent, ItemExplosivesAndGrenadesWeaponComponent
} from '@viewer-app/items/subcategories';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    TooltipModule,
    ItemsRoutingModule,
  ],
  declarations: [ItemsComponent, ItemRangedWeaponComponent, ItemMeleeWeaponComponent, ItemArmorComponent, ItemExplosivesAndGrenadesWeaponComponent],
})
export class ItemsModule {}
