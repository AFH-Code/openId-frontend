import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PublicRoutingModule } from './public/public-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { CoreModule } from './core/core.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicRoutingModule,
    HttpClientModule,
    CoreModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
