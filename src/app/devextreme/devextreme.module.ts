import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevextremeRoutingModule } from './devextreme-routing.module';
import { DevextremeComponent } from './devextreme.component';
import { ButtonsComponent } from './buttons/buttons.component';

import {
  DxButtonModule,
  DxSwitchModule,
  DxDataGridModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxFormModule
} from 'devextreme-angular';
import { LocalDataGridService } from 'app/devextreme/grids/local-data-grid/local-data-grid.service';
import { LocalDataGridComponent } from 'app/devextreme/grids/local-data-grid/local-data-grid.component';
import { FormComponent } from './form/form.component';
import { FormService } from 'app/devextreme/form/form.service';

@NgModule({
  imports: [
    CommonModule,
    DevextremeRoutingModule,
    DxButtonModule,
    DxSwitchModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxFormModule
  ],
  declarations: [
    DevextremeComponent,
    ButtonsComponent,
    LocalDataGridComponent,
    FormComponent
  ],
  providers: [LocalDataGridService, FormService]
})
export class DevextremeModule { }
