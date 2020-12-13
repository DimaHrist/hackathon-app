import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningListComponent } from './planning-list/planning-list.component';
import { PlanningItemComponent } from './planning-item/planning-item.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PlanningListComponent,
    PlanningItemComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    IvyCarouselModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [MatIconRegistry]
})
export class PlanningModule { }
