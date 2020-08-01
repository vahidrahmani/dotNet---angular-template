import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authServise: AuthService, private router: Router) {

  }
  loggin: boolean = false;
  canActivate(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean>{
    if (this._authServise.currentUserValue && this._authServise.currentUserValue.token) {
      this.loggin = true;
    } else {
      this.loggin = false;
      this.router.navigate(['/dashboard'])
    }
    return of(this.loggin);
    
  }
}
