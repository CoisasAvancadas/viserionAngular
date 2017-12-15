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
var atividade_service_1 = require("./atividade.service");
var ListAtividade = (function () {
    function ListAtividade(_listAtividade, router) {
        var _this = this;
        this._listAtividade = _listAtividade;
        this.atividades = [];
        this.errorMessage = '';
        this.evento = localStorage.getItem("EventoId");
        this.getAtividades = function () {
            _this._listAtividade.getData().subscribe(function (atividade) {
                _this.atividades = atividade;
            }, function (error) {
                _this.errorMessage = error;
                _this.router.navigateByUrl("/");
            });
        };
        this.direcionar = function (button) {
            localStorage.setItem("AtividadeId", button.id);
            //this.router.navigateByUrl("atividade");
        };
        this.getAtividades();
    }
    return ListAtividade;
}());
ListAtividade = __decorate([
    core_1.Component({
        selector: "atividade",
        templateUrl: './atividade.component.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [atividade_service_1.AtividadeService, router_1.Router])
], ListAtividade);
exports.ListAtividade = ListAtividade;
//# sourceMappingURL=atividade.component.js.map