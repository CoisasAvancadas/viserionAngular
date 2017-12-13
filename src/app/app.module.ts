import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { LogIn }  from './log-in/login.component';
import { NotFound }  from './not-found/not-found.component';

import { ROUTES } from "./routes/app.routes";

@NgModule({
  imports : [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations : [
    AppComponent,
    LogIn,
    NotFound
  ],
  bootstrap : [
    AppComponent
  ]
})
export class AppModule { }
