import { Component } from "@angular/core";
declare var $ : any;

@Component({
  selector : "not-found",
  templateUrl : "./not-found.component.html"
})

export class NotFound {
  name = "Not found";

  ngAfterViewInit() {
    $(document).ready(function () {
      $(".back").on("click", function (e) {
        e.preventDefault();
        window.history.back();
      });
    })
  }
}