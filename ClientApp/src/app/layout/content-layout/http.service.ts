import { Injectable } from '@angular/core';
import { apiUrl } from '@core/api_rout';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { PanelContextInterface, IboxContext, IFavoritMessageInput } from '@models/Interface';
import * as moment from 'jalali-moment';

@Injectable()
export class HttpService extends apiUrl {
  constructor(private $http: HttpClient) {
    super() ;
  }


  // updateFavoritMessage(model: IFavoritMessageInput) {
  //   return this.$http.post(this.messages.updateFavoritMsg, {
  //     BoxId: model.boxId,
  //     MessageId: model.messageId,
  //     Type: model.type,
  //     IsFavorit: model.isFavorit
  //   })
  //     .pipe(
  //       catchError(error => throwError('خطا در دریافت اطلاعات'))
  //     )
  // }



}
