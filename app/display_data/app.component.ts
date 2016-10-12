import {Component} from '@angular/core';

import {Hero} from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>我最喜欢的英雄是: {{myHero.name}}</h2>
    <p>英雄列表：</p>
    <ul>
      <li *ngFor="let hero of heros">
        id: {{hero.id}} | name: {{hero.name}}
      </li>    
    </ul>
    <p *ngIf="heros.length > 4">英雄人数大于3<p>
</p>
  `
})

export class AppComponent {
  title = '这里是标题';
  heros = [
    new Hero(1, 'a'),
    new Hero(2, 'b'),
    new Hero(3, 'c'),
    new Hero(4, 'd')
  ];
  myHero = this.heros[0];
}