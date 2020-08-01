import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment'

@Pipe({
  name: 'toShamsiDate'
})
export class ToShamsiDatePipe implements PipeTransform {

  transform(date: string, format: string = 'YYYY/MM/DD HH:mm'): string {
    if (date) {
      var persianDate = moment(new Date(date)).format('jYYYY/jMM/jDD HH:ss')

      //moment(date).locale('fa').format(format);
      return persianDate;
    } else {
      return null;
    }
  }
}
