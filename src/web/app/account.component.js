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
var transaction_service_1 = require('./transaction.service');
var AccountComponent = (function () {
    function AccountComponent(txService) {
        this.txService = txService;
    }
    AccountComponent.prototype.showTransactions = function () {
        var _this = this;
        console.log('hello ' + this.ual);
        this.txService.getTransactions()
            .then(function (data) {
            _this.transactions = data;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccountComponent.prototype, "ual", void 0);
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'account',
            template: "<h1>Account {{ual}} <button (click)=\"showTransactions()\">Show Transactions</button></h1>\n  <table>\n    <tr *ngFor=\"let tx of transactions\">\n      <td>{{tx.id}}</td>\n      <td>{{tx.type}}</td>\n      <td>{{tx.amount}}</td>\n    </tr>\n  </table>\n  ",
            providers: [transaction_service_1.TransactionService]
        }), 
        __metadata('design:paramtypes', [transaction_service_1.TransactionService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map