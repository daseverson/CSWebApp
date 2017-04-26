import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevextremeComponent } from 'app/devextreme/devextreme.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { MockupsComponent } from 'app/mockups/mockups.component';
import { StyleGuideComponent } from 'app/style-guide/style-guide.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devextreme', component: DevextremeComponent },
  { path: 'mockups', component: MockupsComponent },
  { path: 'style-guide', component: StyleGuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
