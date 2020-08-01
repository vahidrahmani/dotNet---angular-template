import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-sata-check-box',
    templateUrl: './sata-check-box.component.html',
  styleUrls: ['./sata-check-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SataCheckBoxComponent),
      multi: true
    }
  ] 
})
/** sataCheckBox component*/
export class SataCheckBoxComponent implements ControlValueAccessor {

  constructor() { }
  model: boolean = false;

  @Input() disabled: boolean = false;
  onChange: any = () => { }

  onTouch: any = () => { }

  writeValue(val: boolean) {
    this.model = val;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  click() {
    this.model = !this.model;
    this.onChange(this.model);
  }
}
