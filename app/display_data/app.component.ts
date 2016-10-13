import {Component} from '@angular/core';

import {Hero} from './hero';

@Component({
  selector: 'my-app',
  template: `
   <input type="text" (keyup)="1111" #a > 
   {{a.value}}
  `
})

export class AppComponent {
  inputMessage = '';

  onInput(e) {
    this.inputMessage += e.target.value + '|';
  }
}