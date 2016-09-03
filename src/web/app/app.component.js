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
    AppComponent.prototype.search = function () {
        this.thisUal = "46012344433";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'hello-angular2',
            template: "\n  <div class=\"container\">\n  <div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">App Component</div>\n  <div class=\"panel-body\">\n    <div>\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Account Id\" [(ngModel)]=\"thisUal\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-default\" (click)=\"search()\">Search</button>\n        </span>\n      </div>\n    </div>\n    <div class=\"row\">\n      <account ual={{thisUal}}></account>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n      aa\n      </div>\n      <div class=\"col-md-6\">\n      bb\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map