import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSliderModule,
} from '@angular/material';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  exports: [MatButtonModule, MatIconModule, MatButtonModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAutocompleteModule,
    MatDatepickerModule, MatMomentDateModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSliderModule]
})
export class SharedMaterialModule { }
