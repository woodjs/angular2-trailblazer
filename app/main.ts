import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './display_data/app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);