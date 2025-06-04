import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { reqResKeyInterceptor } from '@services/interceptors/req-res-key.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withViewTransitions({skipInitialTransition: true})),
    provideHttpClient(withInterceptors([reqResKeyInterceptor])), //Importación de la funcionalidad httpClient para la aplicación
    //En versiones anteriores importProvidersFrom(HttpModule)
  ]
  //Con withViewTransitions aplicamos entre rutas la animación fade in para todos los componentes renderizados por rutas.
};
