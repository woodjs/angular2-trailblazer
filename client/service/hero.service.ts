import {Injectable} from '@angular/core';

import {Hero} from '../schema/hero';
import {HEROES} from '../mock/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }
}