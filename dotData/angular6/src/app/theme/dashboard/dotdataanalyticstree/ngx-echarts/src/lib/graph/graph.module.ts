import { NgModule } from '@angular/core';
import { GraphComponent } from './graph.component';
import { ChartCommonModule } from '@swimlane/ngx-charts';
import { MouseWheelDirective } from './mouse-wheel.directive';
export { GraphComponent };
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ChartCommonModule, CommonModule],
  declarations: [
    GraphComponent,
    MouseWheelDirective
  ],
  exports: [
    GraphComponent,
    MouseWheelDirective
  ]
})
export class GraphModule {}
