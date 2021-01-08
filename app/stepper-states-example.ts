import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

/**
 * @title Stepper with customized states
 */
@Component({
  selector: 'stepper-states-example',
  templateUrl: 'stepper-states-example.html',
  styleUrls: ['stepper-states-example.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StepperStatesExample implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */