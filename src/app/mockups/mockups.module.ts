import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockupsRoutingModule } from './mockups-routing.module';
import { MockupsComponent } from './mockups.component';

@NgModule({
  imports: [
    CommonModule,
    MockupsRoutingModule
  ],
  declarations: [MockupsComponent]
})
export class MockupsModule { }
