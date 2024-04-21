import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const translateModuleConfig: TranslateModuleConfig = {
  defaultLanguage: 'es',
  loader: {
    provide: TranslateLoader,
    useFactory: createTranslateLoader,
    deps: [HttpClient]
  }
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom( TranslateModule.forRoot( translateModuleConfig ) ),
  ]
};
