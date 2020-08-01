import { Injectable } from '@angular/core';
import { NgForage } from 'ngforage';

@Injectable({
  providedIn: 'root'
})
export class IndexDbService {

  constructor(private readonly ngf: NgForage) { }

  /**
   * Saves data to an offline store. You can store the following types of JavaScript objects:
Array
ArrayBuffer
Blob
Float32Array
Float64Array
Int8Array
Int16Array
Int32Array
Number
Object
Uint8Array
Uint8ClampedArray
Uint16Array
Uint32Array
String
   * @param key
   * @param value
   */
  setItem(key: any, value: any): Promise<any> {
    return this.ngf.setItem(key, value)
      .catch(error => {
        throw new Error('خطا در ذخیره اطلاعات در دیتابیس ');
      })
  }

  getItem(key: any): Promise<any> {
    return this.ngf.getItem(key)
      .catch(error => {
        throw new Error('خطا در بازیابی اطلاعات');
      })
  }

  getAllKey(): Promise<any> {
    return this.ngf.keys().catch(err => {
      throw new Error(err);
    })
  }

  /**Removes the value of a key from the offline store.*/
  removeItem(key: any): Promise<any> {
    return this.ngf.removeItem(key)
      .catch(err => {
        throw new Error(err);
      })

  }

  /**Removes every key from the database, returning it to a blank slate. */
  clearDb(): Promise<any> {
    return this.ngf.clear()
      .catch(err => {
        throw new Error(err);
      })
  }

  /**Gets the number of keys in the offline store (i.e. its “length”). */
  lengthDb(): Promise<number>{
   return this.ngf.length()
      .catch(err => {
        throw new Error(err);
      })
  }

}
