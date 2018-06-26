import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  public tabIndex = 0;
  constructor(
  ) { }

  ngOnInit() {

  }
  public tabFocusChange($event: MatTabChangeEvent) {
    console.log(`focus change, index：${$event.index}`);
  }

  public tabSelectedIndexChange($event: number) {
    console.log(`selectedIndex change, index：${$event}`);
  }

  public tabSelectedTabChange($event: MatTabChangeEvent) {
    console.log(`selectedTab change, index：${$event.index}`);
  }
}
