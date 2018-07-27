import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      status: false
    },
    children: [
      {
        path: 'default',
        loadChildren: './dotdataanalytics/dotdataanalytics.module#DotdataanalyticsModule'
      },
      {
        path: 'dotdataanalytics',
        loadChildren: './dotdataanalytics/dotdataanalytics.module#DotdataanalyticsModule'
      },
        {
            path: 'dotdataanalyticstree',
            loadChildren: './dotdataanalyticstree/dotdataanalyticstree.module#DotdataanalyticstreeModule'
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
