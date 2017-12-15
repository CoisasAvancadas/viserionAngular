import { Routes } from "@angular/router";

import { AppComponent } from '../app.component';
import { LogIn }  from '../log-in/login.component';
import { NotFound }  from '../not-found/not-found.component';

import { ListHome }  from '../list-home/list-home.component';

export const ROUTES : Routes = [
  {
    path : '',
    component : LogIn
  },
  {
    path : 'instituicoes',
    component : ListHome
  },
  {
    path : '**',
    component : NotFound
  }
]