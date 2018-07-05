import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotdataanalyticsComponent } from './dotdataanalytics.component';
import {DotdataanalyticsRoutingModule} from './dotdataanalytics-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    DotdataanalyticsRoutingModule,
    SharedModule,
    ChartModule
  ],
  declarations: [DotdataanalyticsComponent]
})
export class DotdataanalyticsModule { }
