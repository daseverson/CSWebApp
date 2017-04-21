import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevextremeRoutingModule } from './devextreme-routing.module';
import { DevextremeComponent } from './devextreme.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  imports: [
    CommonModule,
    DevextremeRoutingModule,
  ],
  declarations: [
    DevextremeComponent,
    ButtonsComponent,
  ]
})
export class DevextremeModule { }
