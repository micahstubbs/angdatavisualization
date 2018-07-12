import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotdataanalyticsComponent } from './dotdataanalytics.component';
import {DotdataanalyticsRoutingModule} from './dotdataanalytics-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {DxChartModule} from 'devextreme-angular';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    DotdataanalyticsRoutingModule,
    SharedModule,
    ChartModule,
    DxChartModule,
    NgxChartsModule
  ],
  declarations: [DotdataanalyticsComponent],
    exports: [DotdataanalyticsComponent],
})
export class DotdataanalyticsModule { }


