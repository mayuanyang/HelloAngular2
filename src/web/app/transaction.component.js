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
var TransactionComponent = (function () {
    function TransactionComponent(txService) {
        this.txService = txService;
    }
    TransactionComponent.prototype.ngOnChanges = function (changes) {
        this.searchTransactions(changes['ual'].currentValue);
    };
    TransactionComponent.prototype.showTransactions = function () {
        var _this = this;
        console.log('hello ' + this.ual);
        this.txService.getTransactions()
            .then(function (data) {
            _this.transactions = data;
        });
    };
    TransactionComponent.prototype.searchTransactions = function (phrase) {
        var _this = this;
        //console.log(`searching for ${phrase}`);
        this.txService.search(phrase)
            .then(function (data) {
            _this.transactions = data;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TransactionComponent.prototype, "ual", void 0);
    TransactionComponent = __decorate([
        core_1.Component({
            selector: 'transactions',
            template: "\n  <div class=\"col-md-12\">\n  <div class=\"panel panel-info\">\n  <div class=\"panel-heading\">Account Component</div>\n  <div class=\"panel-body\">\n    \n  <h3>{{ual}} </h3>\n  <button class=\"btn btn-primary\" (click)=\"showTransactions()\">Show All Transactions</button>\n  <table class=\"table table-bordered\">\n  <tr>\n    <th>Account Id</th>\n    <th>Payment Type</th>\n    <th>Amount</th>\n    <th></th>\n  </tr>\n    <tr *ngFor=\"let tx of transactions\">\n      <td>{{tx.accountId}}</td>\n      <td>{{tx.type}}</td>\n      <td>{{tx.amount | currency : 'AUD' | lowercase }}</td>\n      <td>Details</td>\n    </tr>\n  </table>\n  </div>\n</div>\n</div>\n    \n  ",
            providers: [transaction_service_1.TransactionService]
        }), 
        __metadata('design:paramtypes', [transaction_service_1.TransactionService])
    ], TransactionComponent);
    return TransactionComponent;
}());
exports.TransactionComponent = TransactionComponent;
//# sourceMappingURL=transaction.component.js.map