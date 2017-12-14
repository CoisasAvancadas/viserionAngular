import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { List } from './list-home';

@Injectable ()
export class ListService {
  
  constructor(private http: Http) {
  }

  public getData = ():Observable<List[]> => {
    //let baseUrl = "http://localhost:8084/Viserion/api/";
    //let url = baseUrl + "Instituicaos";
    let url = "http://jsonplaceholder.typicode.com/posts/";

    return this.http.get(url).map(this.extractData).catch(this.handleError);
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