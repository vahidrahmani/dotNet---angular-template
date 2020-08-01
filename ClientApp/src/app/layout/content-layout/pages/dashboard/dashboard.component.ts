import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { UtilityService } from '@shared/service/utility.service';
import { PanelContextInterface, RemainMessageCount } from '@models/Interface';
import { HttpService } from '../../http.service';
import * as rxjs from 'rxjs/operators';
import { Subject, of, Subscription } from 'rxjs';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private utility: UtilityService, private servise: HttpService) {

  }
  ngOnDestroy(): void {
    this.destroy$.next(true); 
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
   
    // this.servise.getRemainMessageCount()
    //   .pipe(
    //     rxjs.tap((res: RemainMessageCount) => {
    //       this.PrecentRemainMessageCount = ((res.allMessagePanel - res.allMessageCount) / res.allMessageCount) * 100
    //       this.PrecentRemainMessageCount = (100 - this.PrecentRemainMessageCount).toFixed(2);
    //       this.remainTimePanel = res.dateDiffTime;
    //     }),
    //     rxjs.takeUntil(this.destroy$),
    //     rxjs.catchError(error => of(alert(error)))
    //   )
    //   .subscribe()

   
  }


}
