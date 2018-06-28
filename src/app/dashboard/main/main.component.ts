import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver, Inject,
  InjectionToken,
  Injector,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MatButton, MatIconRegistry, MatRipple} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {CdkPortal, ComponentPortal, DomPortalOutlet, Portal, PortalInjector, TemplatePortal} from '@angular/cdk/portal';
import {ViewChildren} from '@angular/core';
import {PORTAL4_INJECT_DATA, Portal4Component} from './portal4/portal4.component';
import {DOCUMENT} from '@angular/common';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild(MatRipple) ripple: MatRipple;
  public displayFocusTrap = false;
  public displayContent = 0;
  public currentPortal: Portal<any>;
  public name = 'sawyerButton';
  public domPortalOutlet: DomPortalOutlet;
  @ViewChild('template') template3: TemplateRef<any>;
  @ViewChildren(CdkPortal) templatPortals: QueryList<CdkPortal>;
  constructor(
    @Inject(DOCUMENT) private document: any,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
  ) {
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      // url for svg icon
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_solidBlack.svg'));
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
  ngOnInit() {}
  triggerRipple() {
    const point1 = this.ripple.launch(0, 0, { color: 'pink', centered: true, persistent: true, radius: 50 });
    const point2 = this.ripple.launch(0, 0, { color: 'yellow', centered: true, persistent: true, radius: 20 });
    setTimeout(() => {
      point1.fadeOut();
    }, 500);
  }

  clearRipple() {
    this.ripple.fadeOutAll();
  }
  public changePortal1() {
    this.templatPortals.first.context = { nameInObject: this.name };
    this.currentPortal = this.templatPortals.first;
  }

  public changePortal2() {
    this.currentPortal = this.templatPortals.last;
  }
  public changePortal3() {
    // use TemplatePortal encapsulating TemplateRef
    this.currentPortal = new TemplatePortal(this.template3, this.viewContainerRef, { nameInObject: this.name});
  }
  changePortal4() {
    this.currentPortal = new ComponentPortal(Portal4Component, undefined, this._createInjector());
  }

  private _createInjector(): PortalInjector {
    const injectionTokens = new WeakMap();
    injectionTokens.set(PORTAL4_INJECT_DATA, { nameInObject: this.name });
    return new PortalInjector(this.injector, injectionTokens);
  }
  public createOutletOutOfApp() {
    const element = this.document.createElement('div');
    element.innerHTML = '<br>I am out of &ltapp-root&gt';
    this.document.body.appendChild(element);
    this.domPortalOutlet = new DomPortalOutlet(element, this.componentFactoryResolver, this.appRef, this.injector);
  }
  public addTemplatePortal() {
    this.domPortalOutlet.attachTemplatePortal(this.templatPortals.last);
  }

}
