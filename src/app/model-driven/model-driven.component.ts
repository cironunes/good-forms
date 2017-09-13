import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  AbstractControl,
  Validators
} from '@angular/forms';
import { Http } from '@angular/http';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Hero } from './hero.model';
import { state } from './hero.service';

const GITHUB_API = `https://api.github.com`;

export const superpowersValidator = (control: AbstractControl) => {
  const invisibility = control.get('invisibility');
  const fly = control.get('fly');
  const healing = control.get('healing');
  const nightVision = control.get('nightVision');

  const fields = [invisibility, fly, healing, nightVision]
    .filter(field => field.value === true);

  if (fields.length < 2) {
    return { atleasttwo: true };
  }

  return null;
};

const skillsValidator = (control: AbstractControl) => {
  const skills = Object.assign({}, control.value);
  const fields = [skills.programming, skills.bjj, skills.fifa];
  const points = fields.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  if (points < 10) {
    return { allpoints: true };
  }

  return null;
};

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent {

  heroForm: FormGroup;
  superpowers = [
    { id: 'invisibility', name: 'Invisibility' },
    { id: 'fly', name: 'Fly' },
    { id: 'healing', name: 'Healing' },
    { id: 'nightVision', name: 'Night vision' }
  ];

  heroes = state.heroes;
  skills: FormGroup;
  name: FormControl;
  github: FormControl;
  isFirstStepValid: boolean;
  users;
  points = 10;

  constructor(
    private fb: FormBuilder,
    private http: Http
  ) {
    const defaultHero = this.heroes[0];

    this.heroForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      rival: [],
      superpowers: fb.group({
        invisibility: false,
        fly: false,
        nightVision: false,
        healing: false
      }, { validator: superpowersValidator }),
      sex: [],
      skills: fb.group({
        programming: 0,
        bjj: 0,
        fifa: 0
      }, { validator: skillsValidator }),
      github: []
    });

    this.name = (this.heroForm.get('name') as FormControl);
    this.skills = (this.heroForm.get('skills') as FormGroup);

    this.name.valueChanges.subscribe(() => {
      this.isFirstStepValid = this.name.valid;
    });

    this.skills
      .valueChanges
      .subscribe(skills => {
        let sum = 0;
        for (const i in skills) {
          if (skills.hasOwnProperty(i)) {
            sum += skills[i];
          }
        }

        this.points = 10 - sum;
      });

    this.github = (this.heroForm.get('github') as FormControl);

    this.users = this.github.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(github => this.searchUsers(github));
  }

  searchUsers(q: string) {
    return this.http.get(`${GITHUB_API}/search/users`, { search: { q } })
      .map(response => response.json())
      .map(data => data.items);
  }

  createHero() {
    this.heroes.push(this.heroForm.value);
    this.heroForm.reset({
      name: '',
      skills: {
        bjj: 0,
        fifa: 0,
        programming: 0
      }
    });
  }

}
