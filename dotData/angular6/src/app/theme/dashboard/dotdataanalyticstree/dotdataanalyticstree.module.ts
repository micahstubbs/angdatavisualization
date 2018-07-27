


import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DotdataanalyticstreeComponent } from './dotdataanalyticstree.component';
import { DotdataanalyticstreeRoutingModule } from './dotdataanalyticstree-routing.module';


import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {SimpleNotificationsModule} from 'angular2-notifications';

//  BrowserModule,  BrowserAnimationsModule,

import { NgxGraphModule } from './ngx-graph.module';

@NgModule({
    providers: [
        {
            provide: APP_BASE_HREF,
            useFactory: getBaseLocation
        }
    ],
    imports: [NgxChartsModule, NgxGraphModule, DotdataanalyticstreeRoutingModule,  CommonModule, FormsModule],
    declarations: [DotdataanalyticstreeComponent],
    bootstrap: [DotdataanalyticstreeComponent]
})

export class DotdataanalyticstreeModule { }

export function getBaseLocation() {
    const paths: string[] = location.pathname.split('/').splice(1, 1);
    const basePath: string = (paths && paths[0]) || '';
    return '/' + basePath;
}
