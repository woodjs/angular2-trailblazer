import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {appRoute} from '../route/app.route';

import {AppComponent} from '../component/app.component';
import {DashboardComponent} from "../component/dashboard.component";
import {HeroesComponent} from '../component/heroes.component';
import {HeroDetailComponent} from '../component/hero-detail.component';
import {HeroService} from '../service/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    appRoute
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
