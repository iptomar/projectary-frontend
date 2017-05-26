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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var http_2 = require("@angular/http");
var main_1 = require("../../main");
var ProjectApplicationService = (function () {
    function ProjectApplicationService(_http) {
        this._http = _http;
        this.apiURL = main_1.API.url;
        var user_data = JSON.parse(localStorage.getItem('currentUser'));
        this.userID = parseInt(user_data.user_id);
        this.headers = new http_2.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password));
        this.options = new http_2.RequestOptions({ headers: this.headers });
    }
    return ProjectApplicationService;
}());
ProjectApplicationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProjectApplicationService);
exports.ProjectApplicationService = ProjectApplicationService;
//# sourceMappingURL=project-application.service.js.map