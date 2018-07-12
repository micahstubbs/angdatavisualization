import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dotData';
    API_URL = 'https://dev.rainmakerforce.com/wp-content/plugins';
    BASE_URL = 'https://dev.rainmakerforce.com';

    //API_URL = 'http://localhost/projects/rainmakerforce_new/rainmakerforce/wp-content/plugins';
    //BASE_URL = 'http://localhost/projects/rainmakerforce_new/rainmakerforce';
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}


