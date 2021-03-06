"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth/auth.service");
var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.onLogin = function (credentials) {
        this.auth.login(credentials);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: "\n    <form #f=\"ngForm\" (ngSubmit)=\"onLogin(f.value)\" *ngIf=\"!auth.loggedIn()\">\n      <input type=\"text\" placeholder=\"username\" ngControl=\"username\">\n      <input type=\"password\" placeholder=\"password\" ngControl=\"password\">\n      <button type=\"submit\">Submit</button>    \n    </form>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a;
//# sourceMappingURL=login.component.js.map