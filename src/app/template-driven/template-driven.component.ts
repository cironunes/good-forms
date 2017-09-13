import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  hero: Hero;
  points = 10;

  constructor() {
    this.hero = new Hero('', {
      programming: 0,
      bjj: 0,
      fifa: 0
    });
  }

}
