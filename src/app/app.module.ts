import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import {LoggedInGuard} from './logged-in.guard';
import { AUTH_PROVIDERS } from './auth.service';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    appRoutes
  ],
  providers: [
              LoggedInGuard, 
              AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
