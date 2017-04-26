import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from 'app/mockups/search/search.component';
import { OrderDetailComponent } from 'app/mockups/order-detail/order-detail.component';

const routes: Routes = [
  { path: 'mockups/search', component: SearchComponent },
  { path: 'mockups/order-detail', component: OrderDetailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockupsRoutingModule { }
