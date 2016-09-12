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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'angular2-60mins',
            template: "\n  <div class=\"navbar navbar-inverse\" role=\"navigation\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a href=\"\" class=\"navbar-brand\">\n                Learn Angular 2 In 60 Minutes\n            </a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/transactions\">Transactions</a></li>\n            <li><a routerLink=\"/observable\">Observable</a></li>\n            <li><a routerLink=\"/videos\">Videos</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li>\n              <p class=\"navbar-text\"></p>\n            </li>\n          </ul>  \n        </div>\n    </div>\n  <div class=\"container\">\n    <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">App Component</div>\n    <div class=\"panel-body\">\n      <router-outlet></router-outlet>      \n    </div>\n    </div>\n</div>  ",
            styleUrls: ['app/site.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map