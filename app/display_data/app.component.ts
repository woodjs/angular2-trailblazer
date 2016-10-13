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
  model =  new Hero(1, '大锤', '做饭', '开朗');
}