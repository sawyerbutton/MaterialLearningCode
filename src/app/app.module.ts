import {  } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { HttpClientModule } from '@angular/common/http';
// import { SubContentPipe } from './shared/sub-content.pipe';
// import { ReactiveFormsModule} from '@angular/forms';
import { PlatformModule} from '@angular/cdk/platform';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    PlatformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
