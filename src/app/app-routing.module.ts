import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevextremeComponent } from 'app/devextreme/devextreme.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { MockupsComponent } from 'app/mockups/mockups.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devextreme', component: DevextremeComponent },
  { path: 'mockups', component: MockupsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
