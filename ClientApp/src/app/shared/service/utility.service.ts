import { Injectable } from '@angular/core';
import { apiUrl } from '@core/api_rout';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PanelContextInterface, Inputwords } from '@models/Interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService extends apiUrl {
  private currentUserPanelSubject: BehaviorSubject<PanelContextInterface>;
  public currentPanel: Observable<PanelContextInterface>;
  public scrollOnSearchPage: Subject<boolean> = new Subject();
  isPanelActive: boolean;
  constructor(private $http: HttpClient, private router: Router) {
    super();
    this.currentUserPanelSubject = new BehaviorSubject(null);
    this.currentPanel = this.currentUserPanelSubject.asObservable();
    
  }
  public get currentPanelValue(): any {
    return this.currentUserPanelSubject.value;
  }
  getUserActivePanel(): Observable<any> {
    return this.$http.get(this.panel.activePanel)
      .pipe(
        tap((val: PanelContextInterface) => {
          if (val) { 
            this.isPanelActive = val !== null;
            this.currentUserPanelSubject.next(val);
          } else {
            this.router.navigate(['/dashboard/panelList']);
          }
        }),
        catchError(error => throwError('خطا در دستیابی به پنل فعال کاربر'))
      )
  }
}
