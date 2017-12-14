"use strict";
var not_found_component_1 = require("../not-found/not-found.component");
var list_home_component_1 = require("../list-home/list-home.component");
exports.ROUTES = [
    {
        path: '',
        component: list_home_component_1.ListHome
    },
    {
        path: '**',
        component: not_found_component_1.NotFound
    }
];
//# sourceMappingURL=app.routes.js.map