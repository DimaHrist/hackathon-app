import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningListComponent } from './planning-list/planning-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlanningListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule {
}
