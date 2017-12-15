import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
    console.log(user);
    console.log(senha);

    //let params = new URLSearchParams;
    let params:FormData = new FormData();
    params.append("usuario.username", user);
    params.append("usuario.password", senha);
    console.log(params);

    let baseUrl = "http://localhost:8084/Viserion/api/";
    let url = "http://localhost:8084/Viserion/api/Usuarios/auth";

    let headers = new Headers();
    let options = new RequestOptions({params});

    this.http.post(url, params)
      .subscribe(
        (res) => {
          console.log(res);
          console.log(res.json());
          console.log(res.json().string);
          localStorage.setItem("token", res.json().string);
          this.router.navigateByUrl('instituicoes');
        },
        (err) => {
          console.log(err);
        }
      )
  }
}