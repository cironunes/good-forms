export class Skill {
  name: string;
  quantity?: number;
}

export class Hero {

  name: string;
  rival: string;
  superpowers: string[];
  sex: string;
  birthdate: Date;
  skills: Skill[];
  github: string;


}

export const rivals: string[] = [
  'Mr. Catchup',
  'Chocolate',
  'PHP'
];