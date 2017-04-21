import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevextremeComponent } from 'app/devextreme/devextreme.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', children: [] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devextreme', component: DevextremeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
