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
var Observable_1 = require('rxjs/Observable');
var ObservableSimpleComponent = (function () {
    function ObservableSimpleComponent() {
    }
    ObservableSimpleComponent.prototype.doWorkWithPromise = function () {
        var _this = this;
        var promise = new Promise(function (resolve) {
            return resolve('i am a promise');
        });
        promise.then(function (value) { return _this.result = value; });
    };
    ObservableSimpleComponent.prototype.doWorkWithObservable = function () {
        var _this = this;
        var stream$ = new Observable_1.Observable(function (observer) {
            return observer.next('i am an observable');
        });
        stream$.subscribe(function (value) { return _this.result = value; });
    };
    ObservableSimpleComponent = __decorate([
        core_1.Component({
            selector: 'observable-simple',
            template: "\n  <div class=\"col-md-12\">\n  <div class=\"panel panel-info\">\n  <div class=\"panel-heading\">Simple Observable</div>\n  <div class=\"panel-body\">\n    \n  <h3>{{result}} </h3>\n  <button class=\"btn btn-primary\" (click)=\"doWorkWithPromise()\">Do Work With Promise</button>\n  <button class=\"btn btn-primary\" (click)=\"doWorkWithObservable()\">Do Work With Observable</button>\n  \n  </div>\n</div>\n</div>\n    \n  ",
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ObservableSimpleComponent);
    return ObservableSimpleComponent;
}());
exports.ObservableSimpleComponent = ObservableSimpleComponent;
//# sourceMappingURL=observable-simple.component.js.map