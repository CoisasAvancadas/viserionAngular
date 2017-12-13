"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NotFound = (function () {
    function NotFound() {
        this.name = "Not found";
    }
    NotFound.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $(".back").on("click", function (e) {
                e.preventDefault();
                window.history.back();
            });
        });
    };
    return NotFound;
}());
NotFound = __decorate([
    core_1.Component({
        selector: "not-found",
        templateUrl: "./not-found.component.html"
    })
], NotFound);
exports.NotFound = NotFound;
//# sourceMappingURL=not-found.component.js.map