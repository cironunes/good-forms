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
      skills: {
        programming: 5,
        bjj: 3,
        fifa: 2
      },
      github: 'cironunes'
    }
  ]
};

@Injectable()
export class HeroService {

}