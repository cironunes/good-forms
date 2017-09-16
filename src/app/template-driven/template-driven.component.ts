import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class Hero {
  constructor(
    public name: string,
    public skills: any
  ) {}
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  @ViewChild('heroForm') heroForm: FormGroup;
  hero: Hero;
  points = 10;

  constructor() {
    this.initializeHero();
  }

  updatePoints(points: number): void {
    this.points = points;
  }

  initializeHero() {
    if (this.heroForm) {
      this.heroForm.reset({
        Programming: 0,
        BJJ: 0,
        FIFA: 0
      });
    }

    this.hero = new Hero('', {
      programming: 0,
      bjj: 0,
      fifa: 0
    });
    this.points = 10;

  }

}
