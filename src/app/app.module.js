"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var login_component_1 = require("./log-in/login.component");
var not_found_component_1 = require("./not-found/not-found.component");
var list_home_component_1 = require("./list-home/list-home.component");
var list_home_service_1 = require("./list-home/list-home.service");
var evento_component_1 = require("./list-eventos/evento.component");
var evento_service_1 = require("./list-eventos/evento.service");
var atividade_component_1 = require("./list-atividades/atividade.component");
var atividade_service_1 = require("./list-atividades/atividade.service");
var app_routes_1 = require("./routes/app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LogIn,
            not_found_component_1.NotFound,
            list_home_component_1.ListHome,
            evento_component_1.ListEvento,
            atividade_component_1.ListAtividade
        ],
        providers: [
            list_home_service_1.ListService,
            evento_service_1.EventoService,
            atividade_service_1.AtividadeService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map