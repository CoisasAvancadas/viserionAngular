"use strict";
var auth_guard_service_1 = require("../auth/auth-guard.service");
exports.ROUTES = [
    {
        path: ''
    },
    {
        path: '',
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'unauthorized',
        component: null //UnauthorizedComponent
    }
];
//# sourceMappingURL=app.routes.js.map