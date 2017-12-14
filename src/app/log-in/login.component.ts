import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

declare var $ : any;

@Component({
  selector : 'login',
  templateUrl : './login.component.html'
})

export class LogIn {
  router: Router;

  constructor(router: Router, private http: Http) {
    this.router = router;
  }

  logar = (form: NgForm) => {
    let user = form.value.user;
    let senha = form.value.senha;

    let baseUrl = "http://localhost:8084/Viserion/api/";
    let url = baseUrl + "Usuarios/auth";
    let formbody = {
      username : user,
      password : senha
    };
    let body = JSON.stringify(formbody);
    console.log(formbody);

    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    this.http.post(url, body, options)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.json());
        }
      )
  }
}