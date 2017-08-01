import { Injectable } from "@angular/core";

import { Hero } from './hero.model';

export interface State {
  heroes: Hero[];
}


export const state = {
  heroes: [
    {
      name: 'Ciro',
      rival: 'Chocolate',
      superpowers: {
        invisibility: true,
        fly: true,
        nightVision: false,
        healing: false
      },
      sex: 'Male',
      skills: [
        { name: 'BJJ', quantity: 3 },
        { name: 'Programming', quantity: 4 },
        { name: 'FIFA', quantity: 3 }
      ],
      github: 'cironunes'
    }
  ]
};

@Injectable()
export class HeroService {

}