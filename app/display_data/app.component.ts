import {Component} from '@angular/core';

import {Hero} from './hero';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'my-app.component.html'
})

export class AppComponent {
  powerList = [
    '炒菜',
    '做饭',
    '睡觉'
  ];

  model = new Hero(1, this.powerList[0], '做饭', '开朗');

  submitted = false;

  active = true;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.active = false;
    this.model = new Hero(2, '', '', '');
    setTimeout(() => this.active = true, 0)
  }
}