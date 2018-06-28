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
  MatSnackBarModule,
  MatExpansionModule,
  MatTabsModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
} from '@angular/material';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { A11yModule} from '@angular/cdk/a11y';
import { BidiModule} from '@angular/cdk/bidi';
import { LayoutModule} from '@angular/cdk/layout';
import { ObserversModule} from '@angular/cdk/observers';
import { ScrollDispatchModule} from '@angular/cdk/scrolling';
import { PortalModule} from '@angular/cdk/portal';
import { OverlayModule} from '@angular/cdk/overlay';


@NgModule({
  exports: [MatButtonModule, MatIconModule, MatButtonModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAutocompleteModule,
    MatDatepickerModule, MatMomentDateModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, MatSliderModule,
    MatGridListModule, MatCardModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule, FormsModule, MatChipsModule,
    MatTooltipModule, MatSnackBarModule, MatExpansionModule, MatTabsModule, MatTableModule, MatSortModule, MatPaginatorModule, A11yModule,
    BidiModule, LayoutModule, ObserversModule, ScrollDispatchModule, PortalModule, OverlayModule]
})
export class SharedMaterialModule { }
