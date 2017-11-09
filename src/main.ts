import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {SimpModModule} from "./app/simp-mod/simp-mod.module";

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(SimpModModule)
  .catch(err => console.log(err));

