import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SurveyComponent } from './survey/survey.component';
import { BlogComponent } from './blog/blog.component';
import { SubContentPipe} from '../shared/sub-content.pipe';
import { SubMainPipe } from './Pipe/sub-main.pipe';
import { AddPostDialogComponent } from './blog/add-post-dialog/add-post-dialog.component';
import { AddPostConfirmDialogComponent } from './blog/add-post-confirm-dialog/add-post-confirm-dialog.component';
import { AfterPostNotifyComponent } from './blog/after-post-notify/after-post-notify.component';
import { InboxComponent } from './inbox/inbox.component';
import { EmailComponent } from './inbox/email/email.component';
import { SurveyInputDirective} from './survey/survey-input.directive';
import { BidiTestComponent } from './main/bidi-test/bidi-test.component';
import { CdkObserveContentDemoComponent } from './main/cdk-observe-content-demo/cdk-observe-content-demo.component';
import { Portal4Component } from './main/portal4/portal4.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedMaterialModule],
  declarations: [DashboardComponent, MainComponent, SurveyComponent, BlogComponent, SubContentPipe, SubMainPipe,
    AddPostDialogComponent, AddPostConfirmDialogComponent, AfterPostNotifyComponent, InboxComponent, EmailComponent,
    SurveyInputDirective, BidiTestComponent, CdkObserveContentDemoComponent, Portal4Component],
  exports: [DashboardComponent],
  entryComponents: [ AddPostDialogComponent, AddPostConfirmDialogComponent, AfterPostNotifyComponent, Portal4Component]
})
export class DashboardModule {}
