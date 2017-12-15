import { Routes } from "@angular/router";

import { AppComponent } from '../app.component';
import { LogIn }  from '../log-in/login.component';
import { NotFound }  from '../not-found/not-found.component';

import { ListHome }  from '../list-home/list-home.component';
import { ListEvento }  from '../list-eventos/evento.component';
import { ListAtividade }  from '../list-atividades/atividade.component';

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
    path : 'eventos',
    component : ListEvento
  },
  {
    path : 'atividades',
    component : ListAtividade
  },
  {
    path : '**',
    component : NotFound
  }
]