import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor (private http : Http){}

  login(credentials) {
    this.http
    //TODO Endereço da api
      .post("AQUI_VAI_O_ENDERECO_DA_API", credentials)
      .map(res => res.json())
      .subscribe(
        data => localStorage.setItem("id_token", data.id_token),
        error => console.log(error)
      );
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    localStorage.removeItem('id_token'); 
  }
}