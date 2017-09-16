import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  AbstractControl,
  Validators
} from '@angular/forms';
import { Http } from '@angular/http';

import { Hero } from './hero.model';
import { state } from './hero.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/merge';

import { superpowersValidator, skillsValidator } from '../shared/validators';

const GITHUB_API = `https://api.github.com`;


@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html'
})
export class ModelDrivenComponent implements OnInit, OnDestroy {

  heroForm: FormGroup;
  superpowers = [
    { id: 'invisibility', name: 'Invisibility' },
    { id: 'fly', name: 'Fly' },
    { id: 'healing', name: 'Healing' },
    { id: 'nightVision', name: 'Night vision' }
  ];

  heroes = state.heroes;

  name: FormControl;
  github: FormControl;
  rival: FormControl;
  superpowersGroup: FormGroup;
  skills: FormGroup;

  isFirstStepValid: boolean;
  isSecondStepValid: boolean;
  users;
  points = 10;
  currentStep = 0;

  firstStep$: Subscription;
  skills$: Subscription;
  superpowersGroup$: Subscription;

  constructor(
    private fb: FormBuilder,
    private http: Http
  ) {
    const defaultHero = this.heroes[0];

    this.heroForm = fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      rival: [null, [Validators.required]],
      superpowers: fb.group({
        invisibility: null,
        fly: null,
        nightVision: null,
        healing: null
      }, { validator: superpowersValidator }),
      sex: [],
      skills: fb.group({
        programming: 0,
        bjj: 0,
        fifa: 0
      }, { validator: skillsValidator }),
      github: [null, [Validators.required, Validators.minLength(3)]]
    });

    this.name = (this.heroForm.get('name') as FormControl);
    this.github = (this.heroForm.get('github') as FormControl);
    this.rival = (this.heroForm.get('rival') as FormControl);
    this.skills = (this.heroForm.get('skills') as FormGroup);
    this.superpowersGroup = (this.heroForm.get('superpowers') as FormGroup);
  }

  ngOnInit() {
    this.firstStep$ = Observable.merge(
      this.name.valueChanges,
      this.github.valueChanges,
      this.rival.valueChanges
    ).subscribe(changes => {
      this.isFirstStepValid = this.name.valid && this.github.valid && this.rival.valid;
    });

    this.superpowersGroup$ = this.superpowersGroup.valueChanges.subscribe(superpowers => {
      this.isSecondStepValid = this.superpowersGroup.valid;
    });

    this.skills$ = this.skills
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


    this.users = this.github.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(github => this.searchUsers(github));

  }

  ngOnDestroy() {
    this.firstStep$.unsubscribe();
    this.skills$.unsubscribe();
    this.superpowersGroup$.unsubscribe();
  }

  searchUsers(q: string) {
    return this.http.get(`${GITHUB_API}/search/users`, { search: { q } })
      .map(response => response.json())
      .map(data => data.items);
  }

  createHero() {
    this.heroes.push(this.heroForm.value);
    this.currentStep = 0;

    setTimeout(() => {
      this.heroForm.reset({
        skills: {
          programming: 0,
          bjj: 0,
          fifa: 0
        }
      });
    }, 300);
  }

  back() {
    this.currentStep -= 1;
  }

  next() {
    this.currentStep += 1;
  }

}
