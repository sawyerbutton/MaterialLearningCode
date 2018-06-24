import { Component, OnInit } from '@angular/core';
import {MatDrawerToggleResult, MatSidenav} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(result);
      console.log(`status:${result}`);
    });
  }
  opened() {
    console.log('side nav open');
  }

  closed() {
    console.log('side nav close');
  }
}
