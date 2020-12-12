import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningListComponent } from './planning-list/planning-list.component';
import { PlanningItemComponent } from './planning-item/planning-item.component';
import { PlanningRoutingModule } from './planning-routing.module';



@NgModule({
  declarations: [PlanningListComponent, PlanningItemComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule
  ]
})
export class PlanningModule { }
