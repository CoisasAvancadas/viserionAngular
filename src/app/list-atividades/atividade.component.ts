import { Component, Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AtividadeService } from './atividade.service';
import { Atividade } from './atividade';

@Component({
  selector : "atividade",
  templateUrl : './atividade.component.html'
})

@Injectable()
export class ListAtividade {
  
  private atividades:Atividade[] = [];
  private errorMessage: any = '';
  private router: Router;
  private evento = localStorage.getItem("EventoId");

  constructor(private _listAtividade: AtividadeService, router: Router) {
    this.getAtividades();
  }

  public getAtividades = () => {
    this._listAtividade.getData().subscribe(
      (atividade) => {
        this.atividades = atividade;
      },
      (error) => {
        this.errorMessage = <any>error;
        this.router.navigateByUrl("/");
      }
    );
  }

  public direcionar = (button) => {
    localStorage.setItem("AtividadeId", button.id);
    //this.router.navigateByUrl("atividade");
  }
}