import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-generic-date-picker',
  templateUrl: './generic-date-picker.component.html',
  styleUrls: ['./generic-date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenericDatePickerComponent),
      multi: true
    }
  ]
})
export class GenericDatePickerComponent implements ControlValueAccessor {

  @Input() value: Date = new Date();
  @Input() label: string;

  private onChange: Function;
  private onTouch: Function;

  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: Date): void {
    this.value = obj;
  }
  registerOnChange(fn: Function): void {
  this.onChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }
  dateValueChanged(): void {
    this.onChange(this.value)
  }

}
