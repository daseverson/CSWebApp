import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockupsRoutingModule } from './mockups-routing.module';
import { MockupsComponent } from './mockups.component';
import { SearchComponent } from './search/search.component';
import { DxBoxModule, DxFormModule, DxButtonModule } from 'devextreme-angular';
import { SearchService } from 'app/mockups/search/search.service';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MockupsRoutingModule,
    DxBoxModule,
    DxFormModule,
    DxButtonModule
  ],
  declarations: [MockupsComponent, SearchComponent, OrderDetailComponent],
  providers: [SearchService]
})
export class MockupsModule { }
