import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { DevextremeModule } from 'app/devextreme/devextreme.module';
import { DxBoxModule, DxAccordionModule, DxColorBoxModule, DxResponsiveBoxModule } from 'devextreme-angular';
import { DashboardModule } from 'app/dashboard/dashboard.module';
import { MockupsModule } from 'app/mockups/mockups.module';
import { StyleGuideComponent } from './style-guide/style-guide.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StyleGuideComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DevextremeModule,
    DashboardModule,
    MockupsModule,
    DxBoxModule,
    DxAccordionModule,
    DxColorBoxModule,
    DxResponsiveBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
