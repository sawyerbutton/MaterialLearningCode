import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatStepperIntl} from '@angular/material';
import { ErrorStateMatcher} from '@angular/material';
import { FormGroupDirective} from '@angular/forms';
import { NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import { map} from 'rxjs/operators';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatDatepickerInputEvent} from '@angular/material';
import { MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';
import { MAT_CHECKBOX_CLICK_ACTION} from '@angular/material';
import * as moment from 'moment';
// customize the content for optional label
export class TwStepperIntl extends MatStepperIntl {
  optionalLabel = 'this field is not required';
}
// customize the time for error message
export class EarlyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && control.dirty);
  }
}

export const FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    // monthYearLabel is for the format of date on the top left corner
    monthYearLabel: 'YYYY MMM',
    // a11y is the screen voice mode
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
};
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [
    { provide: MatStepperIntl, useClass: TwStepperIntl },
    // implements the customized errorStateMatcher in module
    // {provide: ErrorStateMatcher, useClass: EarlyErrorStateMatcher}
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: MAT_DATE_FORMATS, useValue: FORMATS },
    // after setting this provider, all label-placehold will show as always style
    // {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
    // noop will disable all functions except the animation, most flexible
    // checked, only change the status of check, will not change influence
    // check-indeterminate,default one, will change the check to checked and indeterminate to false
    // { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' }
  ]

})
export class SurveyComponent implements OnInit {
  public isLinear = true;
  public surveyForm: FormGroup;
  public earlyErrorStateMatcher = new EarlyErrorStateMatcher();
  public countries$: Observable<any[]>;
  public majorTechList: any[];
  public interestList: any[];
  public nestInterestList: any[];
  public indeterminateSelectedPayFor: boolean;
  public startDate = new Date(1999, 1, 10);
  public minDate = new Date(1999, 1, 5);
  public maxDate = new Date(1999, 1, 15);
  constructor(
    private http: HttpClient,
  ) {
    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(5)]),
        intro: new FormControl('', [Validators.required, Validators.minLength(10)]),
        country: new FormControl(''),
        majorTech: new FormControl(),
        // the easiest way to disable the date picker by input box
        birthday: new FormControl({value: '', disabled: true}),
        interest: new FormControl(null),
        // birthday: new FormControl()
      }),
      mainQuestions: new FormGroup({
        payForAll: new FormControl(false),
        payForBook: new FormControl(false),
        payForMusic: new FormControl(false),
        payForMovie: new FormControl(true),
        angularScore: new FormControl(),
        materialScore: new FormControl(),
        subscribeAngular: new FormControl(),
        subscribeAngularMaterial: new FormControl(),
        subscribeNgRx: new FormControl(),
      }),
      otherQuestions: new FormGroup({
        favoriteColorRed: new FormControl(0),
        favoriteColorGreen: new FormControl(0),
        favoriteColorBlue: new FormControl(0)
      })
    });
  }
  // after rxjs6.0 all operators should be use in pipe function
  ngOnInit() {
    // this.countries$ = this.http.get<any[]>('assets/countries.json');
    this.surveyForm
      .get('basicQuestions')
      .get('country')
      .valueChanges.pipe(debounceTime(300))
      .subscribe(inputCountry => {
        this.countries$ = this.http.get<any[]>('assets/countries.json').pipe(map(countries => {
          return countries.filter(country => country.name.indexOf(inputCountry) >= 0);
        }));
      });
    this.majorTechList = [
      {
        name: 'frontend',
        items: ['HTML', 'CSS', 'JavaScript']
      },
      {
        name: 'backend',
        items: ['C#', 'NodeJs', 'Go']
      }];
    this.interestList = [
      {
        id: 1,
        name: 'Basketball'
      },
      {
        id: 2,
        name: 'Soccer'
      },
      {
        id: 3,
        name: 'Baseball'
      }
    ];
    this.nestInterestList = [
      {
        id: 1,
        name: 'Ball Game',
        subItems: [
          {
            id: 11,
            name: 'Basketball'
          },
          {
            id: 12,
            name: 'Volleyball'
          },
          {
            id: 13,
            name: 'Tennis'
          }
        ]
      },
      {
        id: 2,
        name: 'other',
        subItems: [
          {
            id: 21,
            name: 'Swim'
          },
          {
            id: 22,
            name: 'Running'
          }
        ]
      }
    ];
    this._setSelectAllState();
  }
  //
  public highlightFiltered(countryName: string) {
    const inputCountry = this.surveyForm.get('basicQuestions').get('country').value;
    return countryName.replace(inputCountry, `<span class="autocomplete-highlight">${inputCountry}</span>`);
  }
  // display the country as a function way
  public displayCountry(country: any) {
    if (country) {
      return `${country.name} / ${country.code}`;
    } else {
      return '';
    }
  }

  public familyDateFilter(date: moment.Moment): boolean {
    const day = date.day();
    return day !== 5 && day !== 6;
  }

  public logDateInput($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event);
  }
  public logDateChange($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event);
  }
  // set all check box as checked
  public checkAllChange($event: MatCheckboxChange) {
    this.surveyForm
      .get('mainQuestions')
      .get('payForBook')
      .setValue($event.checked);
    this.surveyForm
      .get('mainQuestions')
      .get('payForMusic')
      .setValue($event.checked);
    this.surveyForm
      .get('mainQuestions')
      .get('payForMovie')
      .setValue($event.checked);
    this._setSelectAllState();
  }
  // after click the checkbox, watch the status of pay for all
  payForChange() {
    this._setSelectAllState();
  }

  private _setSelectAllState() {
    const payForBook = this.surveyForm.get('mainQuestions').get('payForBook').value;
    const payForMusic = this.surveyForm.get('mainQuestions').get('payForMusic').value;
    const payForMovie = this.surveyForm.get('mainQuestions').get('payForMovie').value;
    const count = (payForBook ? 1 : 0) + (payForMusic ? 1 : 0) + (payForMovie ? 1 : 0);
    this.surveyForm.get('mainQuestions').get('payForAll').setValue(count === 3);
    this.indeterminateSelectedPayFor = count > 0 && count < 3;
  }

  public get selectedColorRed() {
    return this.surveyForm.get('otherQuestions').get('favoriteColorRed').value;
  }

  public get selectedColorGreen() {
    return this.surveyForm.get('otherQuestions').get('favoriteColorGreen').value;
  }

  public get selectedColorBlue() {
    return this.surveyForm.get('otherQuestions').get('favoriteColorBlue').value;
  }

  // Color combination
  public get selectedColorStyle() {
    return `rgb(${this.selectedColorRed}, ${this.selectedColorGreen}, ${this.selectedColorBlue})`;
  }

}
