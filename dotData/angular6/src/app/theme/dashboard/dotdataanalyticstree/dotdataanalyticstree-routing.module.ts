import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DotdataanalyticstreeComponent} from './dotdataanalyticstree.component';

const routes: Routes = [
  {
    path: '',
    component: DotdataanalyticstreeComponent,
    data: {
      title: 'Dotdataanalyticstree',
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
export class DotdataanalyticstreeRoutingModule { }
