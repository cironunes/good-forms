import { Component } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  hero: Hero;
  programming;

  constructor() {
    this.hero = new Hero('', {
      programming: 0,
      bjj: 0,
      fifa: 0
    });
  }

  decrease(field) {
    const newValue = field.value >= 1 ? field.value - 1 : 0;
    field.update.emit(newValue);
  }

  increase(field) {
    const newValue = field.value <= 9 ? field.value + 1  : 10;
    field.update.emit(newValue);
  }

}
