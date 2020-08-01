import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/service/auth.service';
import { tap, catchError, finalize, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { RegisterContextInterface } from '@models/Interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../authBaseStyle.scss']
})
export class RegisterComponent implements OnDestroy{

  registerForm: FormGroup;
  isLoading: boolean = false;
  error: string = "";
  smsCode: number = null;
  CodeForm: boolean=false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    this.buildForm();
  }

   
  sendSms() {
    this.isLoading = true;
    const credentials = this.registerForm.value;
    this.authService.sendSms(credentials.phonenumber)
      .pipe(
        tap((code: number) => {
          this.CodeForm = true;
          this.isLoading = true;
        }),
        catchError(error => of(this.error = error.message)),
        takeUntil(this.destroy$)
      ).subscribe();

  }

  register() {
    this.isLoading = true;
    const credentials = this.registerForm.value;
    credentials.phonenumber = credentials.phonenumber;
    let item: RegisterContextInterface = {
      code: +this.smsCode,
      ...credentials
    }
    this.authService.register(item)
      .pipe(
        tap(user => {
          this.router.navigate(['/dashboard']);
        }),
        finalize(() => this.isLoading = false),
        catchError(error => of(this.error = error.message)),
        takeUntil(this.destroy$)
      ).subscribe();
  }

  buildForm(){
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.email]],
      lastName: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      phonenumber: [null, [Validators.required, Validators.pattern("(09)[0-9]{9}")]],
      company: [null, null],
      username: [null, null],
      password: [null, [Validators.required]]
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
