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
var evento_service_1 = require("./evento.service");
var ListEvento = (function () {
    function ListEvento(_listEvento, router) {
        var _this = this;
        this._listEvento = _listEvento;
        this.eventos = [];
        this.errorMessage = '';
        this.instituicao = localStorage.getItem("InstituicaoId");
        this.getEventos = function () {
            _this._listEvento.getData().subscribe(function (eventos) {
                _this.eventos = eventos;
            }, function (error) { return _this.errorMessage = error; });
        };
        this.direcionar = function (button) {
            localStorage.setItem("EventoId", button.id);
            _this.router.navigateByUrl("atividades");
        };
        this.getEventos();
    }
    return ListEvento;
}());
ListEvento = __decorate([
    core_1.Component({
        selector: "evento",
        templateUrl: './evento.component.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [evento_service_1.EventoService, router_1.Router])
], ListEvento);
exports.ListEvento = ListEvento;
//# sourceMappingURL=evento.component.js.map