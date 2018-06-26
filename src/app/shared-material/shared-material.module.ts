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
  MatGridListModule,
  MatCardModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatChipsModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';

@NgModule({
  exports: [MatButtonModule, MatIconModule, MatButtonModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAutocompleteModule,
    MatDatepickerModule, MatMomentDateModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSliderModule,
    MatGridListModule, MatCardModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule, FormsModule, MatChipsModule,
    MatTooltipModule, MatSnackBarModule]
})
export class SharedMaterialModule { }
