import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss']
})
export class GoogleChartComponent implements OnInit {
    editing = {};
    rows = [];
    fullRenewalTable = [];
    constructor() {
      this.fetchRenewalPageData((data) => {
      this.fullRenewalTable = data;
  });

      this.fetch((data) => {
          this.rows = data;
      });
  }

  ngOnInit() {
  }
    fetchRenewalPageData(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }


    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/company.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }



    updateValue(event, cell, row) {
        this.editing[row + '-' + cell] = false;
        this.rows[row][cell] = event.target.value;
    }


}
