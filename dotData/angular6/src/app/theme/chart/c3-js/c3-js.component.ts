import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'd3';
import * as c3 from 'c3';

@Component({
  selector: 'app-c3-js',
  templateUrl: './c3-js.component.html',
  styleUrls: [
    './c3-js.component.scss',
    '../../../../../node_modules/c3/c3.min.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class C3JsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const chart2 = c3.generate({
        bindto: '#chart2',
        data: {
          columns: [
            ['Hired', 30],
            ['Not Hired', 120],
          ],
          type: 'donut',
          onclick: function (d, i) {
            console.log('onclick', d, i);
          },
          onmouseover: function (d, i) {
            console.log('onmouseover', d, i);
          },
          onmouseout: function (d, i) {
            console.log('onmouseout', d, i);
          }
        },
        color: {
          pattern: ['#4C5667', '#1ABC9C']
        },
        donut: {
          title: 'Hired v.   Not Hired'
        }
      });
    }, 1);
  }

}
