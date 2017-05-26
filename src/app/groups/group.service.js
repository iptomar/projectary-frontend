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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var main_1 = require("../main");
var GroupService = (function () {
    function GroupService(_http) {
        this._http = _http;
        this.apiURL = main_1.API.url;
        var user_data = JSON.parse(localStorage.getItem('currentUser'));
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password));
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    GroupService.prototype.postGroup = function (name, pass) {
        // create the json to post
        var json = JSON.stringify({
            "desc": name,
            "password": pass
        });
        // return the post 
        return this._http
            .post(this.apiURL + '/group/create', json, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    GroupService.prototype.joinGroup = function (name, pass) {
        // create the json to post
        var json = JSON.stringify({
            "desc": name,
            "password": pass
        });
        // return the post 
        return this._http
            .post(this.apiURL + '/group/join', json, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    GroupService.prototype.listGroups = function () {
        return this._http
            .get(this.apiURL + '/group/', this.options)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    GroupService.prototype.getGroup = function (id) {
        return this._http
            .get(this.apiURL + ("/group/" + id), this.options)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    GroupService.prototype.updateGroup = function (id, name) {
        // create the json to put
        var json = JSON.stringify({
            "name": name
        });
        // return the put 
        return this._http
            .put(this.apiURL + ("/group/" + id), json, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    GroupService.prototype.removeGroup = function (id) {
        return this._http
            .delete(this.apiURL + ("/group/" + id), this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    GroupService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Server error");
    };
    return GroupService;
}());
GroupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map