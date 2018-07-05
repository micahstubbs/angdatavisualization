import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DotdataanalyticsComponent} from './dotdataanalytics.component';

const routes: Routes = [
  {
    path: '',
    component: DotdataanalyticsComponent,
    data: {
      title: 'Dotdataanalytics',
      icon: 'icon-home',
      caption: 'dotData Analytics',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DotdataanalyticsRoutingModule { }
