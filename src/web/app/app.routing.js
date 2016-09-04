"use strict";
var router_1 = require('@angular/router');
var transaction_component_1 = require('./transaction.component');
var transaction_detail_component_1 = require('./transaction-detail.component');
var appRoutes = [
    {
        path: 'transactions',
        component: transaction_component_1.TransactionComponent
    },
    {
        path: 'details',
        component: transaction_detail_component_1.TransactionDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map