import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatistiqueComponent } from './statistique/statistique.component';


@NgModule({
  declarations: [DashboardComponent, StatistiqueComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
