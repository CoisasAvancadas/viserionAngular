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
var router_1 = require("@angular/router");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var list_home_service_1 = require("./list-home.service");
var ListHome = (function () {
    function ListHome(_listInstituicao, router) {
        var _this = this;
        this._listInstituicao = _listInstituicao;
        this.instituicoes = [];
        this.errorMessage = '';
        this.getInstituicoes = function () {
            _this._listInstituicao.getData().subscribe(function (instituicoes) { return _this.instituicoes = instituicoes; }, function (error) {
                _this.errorMessage = error;
                _this.router.navigateByUrl("/");
            });
        };
        this.direcionar = function (button) {
            localStorage.setItem("InstituicaoId", button.id);
            _this.router.navigateByUrl("eventos");
        };
        this.getInstituicoes();
        this.router = router;
    }
    return ListHome;
}());
ListHome = __decorate([
    core_1.Component({
        selector: "list-home",
        templateUrl: './list-home.component.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [list_home_service_1.ListService, router_1.Router])
], ListHome);
exports.ListHome = ListHome;
//# sourceMappingURL=list-home.component.js.map