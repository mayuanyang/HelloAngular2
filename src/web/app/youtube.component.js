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
var youtube_service_1 = require('./youtube.service');
var Subject_1 = require('rxjs/Subject');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var YoutubeComponent = (function () {
    function YoutubeComponent(youtubeService) {
        this.youtubeService = youtubeService;
        this.searchTerms = new Subject_1.Subject();
    }
    YoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.results$ = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.youtubeService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    // Push a search term into the observable stream.
    YoutubeComponent.prototype.search = function (term) {
        console.log(term);
        this.searchTerms.next(term);
    };
    YoutubeComponent = __decorate([
        core_1.Component({
            selector: 'youtube',
            template: "\n  <div class=\"col-md-12\">\n    <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">Youtube Component</div>\n        <div class=\"panel-body\">\n            \n            <h3>Youtube Search </h3>\n            \n                <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" class=\"form-control\" />\n            <div *ngFor=\"let result of results$ | async\" class=\"row\" style=\"margin-bottom:10px; margin-top: 10px;\">\n        <div class=\"col-md-6\">        \n            <img [src]=\"result.snippet.thumbnails.high.url\" class=\"img-rounded\" alt=\"Cinque Terre\" />\n        </div>\n        <div class=\"col-md-6\"> \n            <a href=\"https://www.youtube.com/watch?v={{result.id.videoId}}\" target=\"_blank\">\n                <h3>{{result.snippet.title}}</h3>\n            </a>\n            <p>{{result.snippet.description}}\n        </div>        \n    </div>\n    \n        </div>\n    </div>\n  </div>\n  \n    \n  \n  ",
            providers: [youtube_service_1.YoutubeService]
        }), 
        __metadata('design:paramtypes', [youtube_service_1.YoutubeService])
    ], YoutubeComponent);
    return YoutubeComponent;
}());
exports.YoutubeComponent = YoutubeComponent;
//# sourceMappingURL=youtube.component.js.map