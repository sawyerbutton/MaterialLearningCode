import {Component, ElementRef, OnInit} from '@angular/core';
import {MatDrawerToggleResult, MatSidenav} from '@angular/material';
import { Direction} from '@angular/cdk/bidi';
import { BreakpointObserver} from '@angular/cdk/layout';
import { Breakpoints} from '@angular/cdk/layout';
import {OverlayContainer, ScrollDispatcher} from '@angular/cdk/overlay';
import { CdkScrollable} from '@angular/cdk/overlay';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public bidiMode = 'ltr';
  public theme = 'custom-theme-1';
  constructor(
    public breakpointObserver: BreakpointObserver,
    private scrollDispatcher: ScrollDispatcher,
    private elementRef: ElementRef,
    private overlayContainer: OverlayContainer
  ) { }

  ngOnInit() {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    console.log(`small screen? below 600px? ${isSmallScreen}`);
    this.breakpointObserver.observe('(orientation: portrait)').subscribe(result => {
      console.log(`{portrait: ${result.matches}`);
    });

    this.breakpointObserver.observe('(orientation: landscape)').subscribe(result => {
      console.log(`{landscape: ${result.matches}`);
    });
    // default breakpoints
    this.breakpointObserver.observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        console.log(`Handset: ${result.matches}`);
      });
    this.scrollDispatcher.scrolled(1000).subscribe((scrollable: CdkScrollable) => {
      console.log('scroll happen, at:');
      console.log(scrollable.getElementRef().nativeElement);
    });
    // this can be used in some component without cdkScrollable directive
    this.scrollDispatcher.ancestorScrolled(this.elementRef, 1000).subscribe((scrollable: CdkScrollable) => {
      console.log('ancestor scroll happened at：');
      console.log(scrollable.getElementRef());
    });
    this.overlayContainer.getContainerElement().classList.add(this.theme);
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
  public  logDirChange($event: Direction) {
    console.log(`dir has been changed => ${$event}`);
  }
  toggleTheme() {
    const originalTheme = this.theme;
    this.theme = this.theme === 'custom-theme-1' ? 'custom-theme-2' : 'custom-theme-1';
    console.log(this.theme);
    this.overlayContainer.getContainerElement().classList.remove(originalTheme);
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }
}
