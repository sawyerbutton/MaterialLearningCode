import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-observe-content-demo',
  templateUrl: './cdk-observe-content-demo.component.html',
  styleUrls: ['./cdk-observe-content-demo.component.css']
})
export class CdkObserveContentDemoComponent implements OnInit {
  public count = 0;
  constructor() { }

  ngOnInit() {
  }
  public projectContentChanged($event: MutationRecord[]) {
    ++this.count;
    console.log(`content changed, current time: ${this.count}`);
    console.log($event, this.count);
  }

}
