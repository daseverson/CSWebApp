import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DevextremeComponent } from 'app/devextreme/devextreme.component';
import { ButtonsComponent } from 'app/devextreme/buttons/buttons.component';
import { DxButtonModule, DxSwitchModule } from 'devextreme-angular';
import { DashboardComponent } from 'app/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevextremeComponent,
    DashboardComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DxButtonModule,
    DxSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
