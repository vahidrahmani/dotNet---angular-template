import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { AuthService } from '@core/service/auth.service';
import { UtilityService } from '@shared/service/utility.service';
import * as rxjs from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { PanelContextInterface } from '@models/Interface';
import { NgxPermissionsService } from 'ngx-permissions';
import { Permisionmanager } from '@core/permisionManager';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  currentPanel: PanelContextInterface ;

    constructor(
        private router:Router,
        public _authServise: AuthService,
        private utility: UtilityService,
        private permision: NgxPermissionsService
  ) {

  }
  @Output('onOpenClose') onOpenClose: EventEmitter<any> = new EventEmitter<any>();

  data: any[] = [{
    value: 'huangjingao',
    label: 'main',
  }, {
    value: 'shizitou',
    label: 'home',
  }, {
    value: 'luosifen',
    label: 'header',
  }]

  openCloseNav() {
    this.onOpenClose.emit();
  }
  ngOnInit(): void {
    this.utility.currentPanel.subscribe((val: PanelContextInterface) => {
      this.currentPanel = val;
      if (val) {
        new Permisionmanager(this.permision).addPermision('havePanel');
        this.gotoDashborad()
      }

     // new Permisionmanager(this.permision).getPermition();
       
    });

  }
  logOut() {
    this._authServise.logout();
    location.reload(true);
    }

    gotoDashborad() {
        this.router.navigate(['/dashboard'])
    }

}
