import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {C3JsComponent} from "./c3-js.component";

const routes: Routes = [
  {
    path: '',
    component: C3JsComponent,
    data: {
      title: 'Hired v Not Hired',
      icon: 'icon-bar-chart-HiredNotHired',
      caption: 'Hired v Not Hired',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C3JsRoutingModule { }
