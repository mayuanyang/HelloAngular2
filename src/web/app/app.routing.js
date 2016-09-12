"use strict";
var router_1 = require('@angular/router');
var transaction_component_1 = require('./transaction.component');
var transaction_detail_component_1 = require('./transaction-detail.component');
var youtube_component_1 = require('./youtube.component');
var observable_simple_component_1 = require('./observable-simple.component');
var appRoutes = [
    {
        path: 'transactions',
        component: transaction_component_1.TransactionComponent
    },
    {
        path: 'details',
        component: transaction_detail_component_1.TransactionDetailComponent
    },
    {
        path: 'videos',
        component: youtube_component_1.YoutubeComponent
    },
    {
        path: 'observable',
        component: observable_simple_component_1.ObservableSimpleComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map