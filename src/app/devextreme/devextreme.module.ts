import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevextremeRoutingModule } from './devextreme-routing.module';
import { DevextremeComponent } from './devextreme.component';
import { ButtonsComponent } from './buttons/buttons.component';

import { DxButtonModule, DxSwitchModule, DxDataGridModule } from 'devextreme-angular';
import { LocalDataGridService } from 'app/devextreme/grids/local-data-grid/local-data-grid.service';
import { LocalDataGridComponent } from 'app/devextreme/grids/local-data-grid/local-data-grid.component';

@NgModule({
  imports: [
    CommonModule,
    DevextremeRoutingModule,
    DxButtonModule,
    DxSwitchModule,
    DxDataGridModule
  ],
  declarations: [
    DevextremeComponent,
    ButtonsComponent,
    LocalDataGridComponent
  ],
  providers: [LocalDataGridService]
})
export class DevextremeModule { }
