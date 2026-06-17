import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { authInterceptor } from './core/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Enable fetch API to prevent SSR warnings and register the auth interceptor
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])) 
  ]
};