import { Component, OnInit, OnDestroy } from '@angular/core';
import Stepper from 'bs-stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@core/service/auth.service';
import * as rxjs from "rxjs/operators";
import { of, Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit, OnDestroy {

  passForm: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();
  private stepper: Stepper;
  error: any;
  smsCode: number = null;
  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { this.buildForm() }

  next() {
    this.stepper.next();
  }

  sendSms() {
    const credentials = this.passForm.value;
    this.authService.sendSms(credentials.phonenumber)
      .pipe(
        rxjs.tap(() => {
          this.stepper.next();
        }),
        rxjs.catchError(error => of(this.error = error.message)),
        rxjs.takeUntil(this.destroy$)
      ).subscribe();

  }

  onSubmit() {
    const credentials = this.passForm.value;
    debugger
    this.authService.forgotPassword({
      phonenumber: credentials.phonenumber,
      code: credentials.code,
      newpassword: credentials.password
    }).pipe(
      rxjs.tap((flag: boolean) => {
        if (flag) {
          alert('رمز با موفقیت تغییر پیدا کرد');
          this.router.navigate(['/login']);
        } else {
          alert('خطایی رخ داده لطفا مجددا بررسی نمایید');
        }

      }),
      rxjs.catchError(error => of(this.error = error.message)),
      rxjs.takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: true,
      animation: true
    })
  }

  buildForm() {
    this.passForm = this.formBuilder.group({
      phonenumber: ['', [Validators.required, Validators.pattern("(09)[0-9]{9}")]],
      code: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
