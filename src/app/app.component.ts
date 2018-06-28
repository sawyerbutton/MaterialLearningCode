import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { InteractivityChecker} from '@angular/cdk/a11y';
import {getSupportedInputTypes, Platform} from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('button') button: ElementRef;
  title = 'app';
  public supportInputTypes = getSupportedInputTypes();
  // Interactivity checker is a service detect whether some component support by browser
  constructor(public platForm: Platform) {}
  ngOnInit() {
    // console.log(this.interactivityChecker.isDisabled(this.button.nativeElement));
    // console.log(this.interactivityChecker.isFocusable(this.button.nativeElement));
    // console.log(this.interactivityChecker.isTabbable(this.button.nativeElement));
    // console.log(this.interactivityChecker.isVisible(this.button.nativeElement));
    console.log(this.platForm.ANDROID);
    console.log(this.platForm.isBrowser);
    console.log(this.platForm.BLINK);
    console.log(this.platForm.EDGE);
    console.log(this.platForm.FIREFOX);
    console.log(this.platForm.IOS);
    console.log(this.platForm.SAFARI);
    console.log(this.platForm.TRIDENT);
    console.log(this.platForm.WEBKIT);
    // support types
    console.log(this.supportInputTypes);
  }
}
