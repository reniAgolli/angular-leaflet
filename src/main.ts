import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { KeycloakService } from "../src/app/keycloak/keycloak.service"

if (environment.production) {
  enableProdMode();
}
  KeycloakService.init()
   .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
   .catch(e => {
       console.error(e);
   });
  //  platformBrowserDynamic().bootstrapModule(AppModule)
  // .catch(err => console.log(err));

  