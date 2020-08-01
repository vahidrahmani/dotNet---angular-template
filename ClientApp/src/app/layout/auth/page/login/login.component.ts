import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, delay, finalize, catchError, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { LoginContextInterface } from '@models/Interface';
import { AuthService } from '@core/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../authBaseStyle.scss']
})
export class LoginComponent implements OnDestroy {


  error: string;
  isLoading: boolean;
  loginForm: FormGroup;
  userInfo = null;
  smsCode: number = null;
  destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  //sendSms() {
  //  this.isLoading = true;
  //  const credentials = this.loginForm.value;
  //  this.authService.sendSms("0"+credentials.mobile)
  //    .pipe(
  //      tap((code: any) => {
  //        this.smsCode = code;
  //        this.isLoading = false;
  //      }),
  //      catchError(error => of(this.error = error.message)),
  //      takeUntil(this.destroy$)
  //    ).subscribe();

  //}

  login() {
    this.isLoading = true;
    const credentials = this.loginForm.value;
    this.authService.login({
      phonenumber: credentials.mobile,
      username: null,
      password: credentials.password
    } as LoginContextInterface)
      .pipe(
        tap(user => {
          this.userInfo = user;
          this.router.navigate(['/dashboard']);
        }),
        finalize(() => this.isLoading = false),
        catchError(error => of(this.error = error.error.message)),
        takeUntil(this.destroy$)
      ).subscribe();
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.pattern("(09)[0-9]{9}")]],
      password: ['', Validators.required],
      // username:null
    });
  }




  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
