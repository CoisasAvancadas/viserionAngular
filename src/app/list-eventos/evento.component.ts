import { Component, Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { EventoService } from './evento.service';
import { Evento } from './evento';

@Component({
  selector : "evento",
  templateUrl : './evento.component.html'
})

@Injectable()
export class ListEvento {
  
  private eventos:Evento[] = [];
  private errorMessage: any = '';
  private router: Router;
  private instituicao = localStorage.getItem("InstituicaoId");

  constructor(private _listEvento: EventoService, router: Router) {
    this.getEventos();
    this.router = router;
  }

  public getEventos = () => {
    this._listEvento.getData().subscribe(
      (eventos) => {
        this.eventos = eventos;
      },
      (error) => {
        this.errorMessage = <any>error;
        this.router.navigateByUrl("/");
      }
    );
  }

  public direcionar = (button) => {
    localStorage.setItem("EventoId", button.id);
    this.router.navigateByUrl("atividades");
  }
}