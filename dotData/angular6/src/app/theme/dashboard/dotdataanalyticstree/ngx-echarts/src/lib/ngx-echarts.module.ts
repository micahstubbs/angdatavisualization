import { NgModule } from '@angular/core';
import { NgxEchartsDirective } from './ngx-echarts.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgxEchartsDirective
  ],
  exports: [
    NgxEchartsDirective
  ]
})
export class NgxEchartsModule { }
