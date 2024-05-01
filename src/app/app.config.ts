import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import  localEs from '@angular/common/locales/es';
import  localFrCA from '@angular/common/locales/fr-CA';

import { routes } from './app.routes';

registerLocaleData( localEs );
registerLocaleData( localFrCA );

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'es'  }
  ]
};
