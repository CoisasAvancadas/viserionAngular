"use strict";
var login_component_1 = require("../log-in/login.component");
var not_found_component_1 = require("../not-found/not-found.component");
exports.ROUTES = [
    {
        path: '',
        component: login_component_1.LogIn
    },
    {
        path: '**',
        component: not_found_component_1.NotFound
    }
];
//# sourceMappingURL=app.routes.js.map