import {Component, OnInit} from '@angular/core';

import {Hero} from '../schema/hero.schema';
import {HeroService} from '../service/hero.service';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: '../template/heroes.component.html',
  styleUrls: ['../style/heroes.component.css']
})
export class HeroesComponent implements OnInit{

  title = 'tour of heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelected(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}