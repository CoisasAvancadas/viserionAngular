import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { Atividade } from './atividade';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable ()
export class AtividadeService {
  
  constructor(private http: Http) {
  }

  public getData = ():Observable<Atividade[]> => {
    let baseUrl = "http://localhost:8084/Viserion/api/";
    let url = baseUrl + "Atividades";

    let token = localStorage.getItem("token");
    console.log(token);

    let headers = new Headers();
    headers.append("Authorization", token);
    let options = new RequestOptions({headers : headers});

    return this.http.get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  private handleError(error: any) {
    let errorMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errorMsg);
  }
}