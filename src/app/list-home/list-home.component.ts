import { Component, Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ListService } from './list-home.service';
import { List } from './list-home';

@Component({
  selector : "list-home",
  templateUrl : './list-home.component.html'
})

@Injectable()
export class ListHome {
  
  private instituicoes:List[] = [];
  private errorMessage: any = '';
  private router: Router;

  constructor(private _listInstituicao: ListService, router: Router) {
    this.getInstituicoes();
    this.router = router;
  }

  public getInstituicoes = () => {
    this._listInstituicao.getData().subscribe(
      instituicoes => this.instituicoes = instituicoes,
      (error) => {
        this.errorMessage = <any>error;
        this.router.navigateByUrl("/");
      }
    );
  }

  public direcionar = (button) => {
    localStorage.setItem("InstituicaoId", button.id);
    this.router.navigateByUrl("eventos");
  }
}