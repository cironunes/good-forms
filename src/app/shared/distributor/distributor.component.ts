import { Component, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DistributorComponent),
      multi: true
    }
  ]
})
export class DistributorComponent implements ControlValueAccessor {

  @Input() name: string;
  @Input() groupPoints: number;
  @Output() update = new EventEmitter();
  points: number;

  increment() {
    this.points += 1;
    this.propagateChange(this.points);
    this.update.emit(this.groupPoints - 1);
  }

  decrement() {
    this.points -= 1;
    this.propagateChange(this.points);
    this.update.emit(this.groupPoints + 1);
  }

  writeValue(value: number): void {
    if (value !== undefined) {
      this.points = value;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  propagateChange = (_: any) => {};
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

}
