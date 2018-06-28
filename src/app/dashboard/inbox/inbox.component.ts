import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {MatButton, MatTabChangeEvent} from '@angular/material';
import {TemplatePortal} from '@angular/cdk/portal';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  public tabIndex = 0;
  @ViewChild('overlayMenuList') overlayMenuList: TemplateRef<any>;
  @ViewChild('originFab') originFab: MatButton;
  @ViewChild('originButton') originButton: MatButton;
  overlayRef: OverlayRef;
  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    const strategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    const config = new OverlayConfig({
      hasBackdrop: true,
      // grey backdrop will become transparent
      // backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: strategy,
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });
    this.overlayRef = this.overlay.create(config);

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
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
  public  displayMenu() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      this.overlayRef.attach(new TemplatePortal(this.overlayMenuList, this.viewContainerRef));
    }
  }
}
