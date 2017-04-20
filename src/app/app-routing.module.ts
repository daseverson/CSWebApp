import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevextremeComponent } from 'app/devextreme/devextreme.component';

const routes: Routes = [
  { path: '', children: [] },
  { path: 'devextreme', component: DevextremeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
