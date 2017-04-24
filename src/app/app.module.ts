import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { DevextremeModule } from 'app/devextreme/devextreme.module';
import { DxBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DevextremeModule,
    DxBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
