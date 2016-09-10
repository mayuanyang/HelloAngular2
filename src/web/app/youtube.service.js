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
var http_1 = require('@angular/http');
var YoutubeService = (function () {
    function YoutubeService(http) {
        this.http = http;
        this.webapiUrl = 'https://www.googleapis.com/youtube/v3/search';
        this.api_key = 'AIzaSyDrPpZkJ6tBkdCemWS3jXu6zKTipcZA7SQ';
    }
    YoutubeService.prototype.search = function (term) {
        var url = this.webapiUrl + "?q=" + term + "&part=snippet&maxResults=25&key=" + this.api_key;
        console.log(url);
        var results$ = this.http
            .get(url)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.items; });
        (results$.toPromise().then(function (x) {
            console.log(x);
        }));
        return results$;
    };
    YoutubeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], YoutubeService);
    return YoutubeService;
}());
exports.YoutubeService = YoutubeService;
//# sourceMappingURL=youtube.service.js.map