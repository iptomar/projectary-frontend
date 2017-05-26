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
// Imports
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var main_1 = require("../main");
var ProjectService = (function () {
    function ProjectService(_http) {
        this._http = _http;
        this.apiURL = main_1.API.url;
        var user_data = JSON.parse(localStorage.getItem('currentUser'));
        this.userID = parseInt(user_data.user_id);
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password));
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    ProjectService.prototype.getProjects = function () {
        return this._http.get(this.apiURL + '/project', this.options)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProjectService.prototype.getUserGroups = function () {
        return this._http.get(this.apiURL + ("/group/user/" + this.userID), this.options)
            .map(function (res) { return res.json().data; });
    };
    ProjectService.prototype.postApplication = function (project_id, group_id) {
        return this._http.post(this.apiURL + '/application', JSON.stringify({ "projectid": project_id, "groupid": group_id }), this.options)
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.json().error || "Server error");
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map