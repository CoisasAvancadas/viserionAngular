import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { LogIn }  from './log-in/login.component';
import { NotFound }  from './not-found/not-found.component';

import { ListHome }  from './list-home/list-home.component';
import { ListService } from './list-home/list-home.service';

import { ROUTES } from "./routes/app.routes";

@NgModule({
  imports : [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations : [
    AppComponent,
    LogIn,
    NotFound,
    ListHome
  ],
  providers : [
    ListService
  ],
  bootstrap : [
    AppComponent
  ]
})
export class AppModule { }
