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
var core_1 = require('@angular/core');
var TransactionService = (function () {
    function TransactionService() {
    }
    TransactionService.prototype.getTransactions = function () {
        console.log('getting tranactions');
        var tx1 = { id: '1', type: 'BPay', amount: 10, accountId: '46012345678' };
        var tx2 = { id: '2', type: 'BPay', amount: 20, accountId: '46012345678' };
        return Promise.resolve([tx1, tx2]);
    };
    TransactionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TransactionService);
    return TransactionService;
}());
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map