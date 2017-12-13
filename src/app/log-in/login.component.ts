import { Component } from "@angular/core";
declare var $ : any;

@Component({
  selector : 'login',
  templateUrl : './login.component.html'
})

export class LogIn {
  ngAfterViewInit(){
    $(document).ready(function () {
      $(".login-form").on("submit", function() {
        return false;
      });
    });
  }
}