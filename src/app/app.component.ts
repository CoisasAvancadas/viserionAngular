import { Component } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { 
  name = 'Angular';

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true,
        draggable: true
      });
    });
  }
}
