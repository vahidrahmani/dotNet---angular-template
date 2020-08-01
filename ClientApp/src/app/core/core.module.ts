import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { AuthGuard } from '@core/guard/auth.guard';
import { throwIfAlreadyLoaded } from '@core/guard/module-import.guard';

import { TokenInterceptor } from '@core/interceptor/token.interceptor';
import { LoginProvider } from './interceptor/login-provider';
import { Environment } from '@models/Interface';
import { environment } from '@env';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    LoginProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: __loginProviderFactory,
      deps: [LoginProvider],
      multi: true
    },
    { provide: Environment, useValue: environment}
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

export function __loginProviderFactory(provider: LoginProvider) {
  return () => provider.load();
}
