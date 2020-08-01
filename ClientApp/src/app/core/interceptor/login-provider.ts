import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { Environment } from '@models/Interface';
import { Permisionmanager } from '../permisionManager';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class LoginProvider {

  constructor(
    private _authServise: AuthService,
    private env: Environment,
    private permisionService: NgxPermissionsService) {
    console.log("============================================================================================");
    console.log(" _____                                               ");
    console.log("|                   (_)                            ");
    console.log("|          \\    /   |     | /                       ");
    console.log("|_____      \\  /    |     |/                          ");
    console.log("|            \\/     |     |                             ");
    console.log("|            /\\     |     |                            ")
    console.log("|______     /  \\    |     |                              ");
    console.log("                                                         created by: vahid.rahmani && mohammadreza.nozari");
    console.log("\n");
    console.log("============================================================================================");
  }

  load() {
    let current_url = window.location.href.split('#')[1];
    //check for valid token
    let userValue = this._authServise.currentUserValue;

    if (userValue && userValue.token) {
      //check user Role
      new Permisionmanager(this.permisionService).init(userValue.permissions);
    
      window.location.href = this.env.baseUrl + current_url;
    } else {
      window.location.href = this.env.baseUrl +  "auth/login";
    }
  }
}
