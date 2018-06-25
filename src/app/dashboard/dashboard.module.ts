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

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedMaterialModule],
  declarations: [DashboardComponent, MainComponent, SurveyComponent, BlogComponent, SubContentPipe, SubMainPipe],
  exports: [DashboardComponent]
})
export class DashboardModule {}
