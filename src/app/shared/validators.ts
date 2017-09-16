import { AbstractControl } from '@angular/forms';

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

export const skillsValidator = (control: AbstractControl) => {
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
