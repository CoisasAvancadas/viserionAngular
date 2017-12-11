
import { Component } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Component({
  selector: 'secure-stuff',
  template: `
    <button (click)="getSecureStuff()">Get Secure Stuff!</button>
  `
})

export class SecureStuffComponent {

  stuff: [null];

  constructor(private authHttp: AuthHttp) {}

  getSecureStuff() {
    this.authHttp.get('https://my-app.com/api/secure-stuff')
      .map(res => res.json())
      .subscribe(
        data =>  this.stuff = data.stuff,
        error => console.log(error)
      );
  }
}