import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DistributorComponent),
      multi: true
    }
  ]
})
export class DistributorComponent implements ControlValueAccessor, OnInit {

  @Input() name: string;
  @Input() groupPoints: number;
  points: number;

  constructor() { }

  ngOnInit() {
    this.points -= 1;
    this.propagateChange(this.points);
  }

  increment() {
    this.points += 1;
    this.propagateChange(this.points);
  }

  decrement() {
    this.points -= 1;
    this.propagateChange(this.points);
  }

  propagateChange = (_: any) => {};

  writeValue(value: number): void {
    if (value !== undefined) {
      this.points = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

}
