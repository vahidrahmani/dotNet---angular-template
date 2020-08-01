import { Injectable } from '@angular/core';
import { throwError, Observable, BehaviorSubject, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '@core/api_rout';

@Injectable({
  providedIn: 'root'
})
export class NavService extends apiUrl {
  NavItems = [];
  private allBoxSubject: BehaviorSubject<any>;
  currentBox: Observable<any>;
  constructor(private $http: HttpClient) {
    super();
    this.allBoxSubject = new BehaviorSubject(this.NavItems);
    this.currentBox = this.allBoxSubject.asObservable();
  }


  /*
   * id:BoxId
  */
  public currentBoxValue(id: number) {
    return this.currentBox.pipe(
      map(r => r.filter(f => f.pkBoxId == id))
    )
  }

  getBox(): Observable<any> {
    return this.$http.get(this.box.getAllBox)
      .pipe(
        tap(result => {
          this.allBoxSubject.next(result);
        }),
        catchError(error => throwError('خطا در دریافت اطلاعات'))
      )
  }
}
