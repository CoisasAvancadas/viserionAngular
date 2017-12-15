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
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
var EventoService = (function () {
    function EventoService(http) {
        var _this = this;
        this.http = http;
        this.getData = function () {
            var baseUrl = "http://localhost:8084/Viserion/api/";
            var url = baseUrl + "Eventos";
            var token = localStorage.getItem("token");
            console.log(token);
            var headers = new http_1.Headers();
            headers.append("Authorization", token);
            var options = new http_1.RequestOptions({ headers: headers });
            return _this.http.get(url, options)
                .map(_this.extractData)
                .catch(_this.handleError);
        };
    }
    EventoService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    EventoService.prototype.handleError = function (error) {
        var errorMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        return Rx_1.Observable.throw(errorMsg);
    };
    return EventoService;
}());
EventoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventoService);
exports.EventoService = EventoService;
//# sourceMappingURL=evento.service.js.map