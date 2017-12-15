"use strict";
var login_component_1 = require("../log-in/login.component");
var not_found_component_1 = require("../not-found/not-found.component");
var list_home_component_1 = require("../list-home/list-home.component");
exports.ROUTES = [
    {
        path: '',
        component: login_component_1.LogIn
    },
    {
        path: 'instituicoes',
        component: list_home_component_1.ListHome
    },
    {
        path: '**',
        component: not_found_component_1.NotFound
    }
];
//# sourceMappingURL=app.routes.js.map