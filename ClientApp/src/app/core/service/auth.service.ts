import { Injectable } from '@angular/core';
import { of, Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../api_rout';
import { tap, finalize, catchError, delay } from 'rxjs/operators';
import { LoginContextInterface, UserInfoInterface, RegisterContextInterface, UserInfoUpdatePasswordInterface } from '@models/Interface';
import { NgxPermissionsService } from 'ngx-permissions';
import { Permisionmanager } from '../permisionManager';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends apiUrl {
  private currentUserSubject: BehaviorSubject<UserInfoInterface>;
  public currentUser: Observable<UserInfoInterface>;
  private _authApi = this.auth;

  constructor(public $http: HttpClient, private permisionService: NgxPermissionsService) {

    super();
    this.currentUserSubject = new BehaviorSubject<UserInfoInterface>(JSON.parse(localStorage.getItem('sata_token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserInfoInterface {
    return this.currentUserSubject.value;
  }


  sendSms(phoneNumber: string) {
    return this.$http.post(this._authApi.sendSms,
      { phonenumber: phoneNumber })
      .pipe(
        //  tap((res: any) => of(this.smsCode = res)),
        catchError(error => throwError(error.error))
      )
  }
  logout() {
    localStorage.removeItem('sata_token');
    this.currentUserSubject.next(null);
  }
  private setStorage(userInfo: UserInfoInterface) {
    localStorage.setItem('sata_token',
      JSON.stringify(userInfo)
    );
  }

  login(loginContext: LoginContextInterface) {
    debugger
    return this.$http.post(this._authApi.login,
      {
        username: loginContext.username,
        phonenumber: loginContext.phonenumber,
        password: loginContext.password
      })
      .pipe(
        tap((res: UserInfoInterface) => {
          this.setStorage(res);
          this.currentUserSubject.next(res);
          new Permisionmanager(this.permisionService).init(res.permissions);

        }),
        catchError(error => throwError(error))
      )
  }

  register(registerContext: RegisterContextInterface) {
    return this.$http.post(this._authApi.registerWithMobile, registerContext)
      .pipe(
        tap((res: UserInfoInterface) => {
          this.setStorage(res);
          this.currentUserSubject.next(res);
          new Permisionmanager(this.permisionService).init(res.permissions);

        }),
        catchError(error => throwError(error.error))
      )
  }

  updateUserInfo(userInfo: UserInfoInterface) {
    return this.$http.post(this._authApi.updateUserInf, userInfo)
      .pipe(
        tap((res: boolean) => {
          if (res == true) {
            this.setStorage(userInfo);
            this.currentUserSubject.next(userInfo);
          }

        }),
        catchError(error => throwError(error.error))
      )
  }


  updateUserInfoPassword(userInfoPassword: UserInfoUpdatePasswordInterface) {

    return this.$http.post(this._authApi.updatePassword, userInfoPassword)
      .pipe(
        catchError(error => throwError(error.error))
      );
  }

  deleteAcount() {

    return this.$http.get(this._authApi.ChangeUserActive)
      .pipe(
        catchError(error => throwError(error.error))
      );

  }


  forgotPassword(value: any) {
    return this.$http.post(this._authApi.forgotPass, value)
      .pipe(
        catchError(error => throwError(error.error))
      )
  }





}
