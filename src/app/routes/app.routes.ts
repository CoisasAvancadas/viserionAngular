import { Routes } from "@angular/router";

import { AppComponent } from '../app.component';
import { LogIn }  from '../log-in/login.component';
import { NotFound }  from '../not-found/not-found.component';

export const ROUTES : Routes = [
  {
    path : '',
    component : LogIn
  },
  {
    path : '**',
    component : NotFound
  }
]