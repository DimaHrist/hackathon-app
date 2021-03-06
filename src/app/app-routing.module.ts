import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'planning',
    loadChildren: () => import('./planning/planning.module').then(m => m.PlanningModule)
  },
  {
    path: '',
    redirectTo: '/planning',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
