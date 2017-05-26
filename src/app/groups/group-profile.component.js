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
var router_1 = require("@angular/router");
var group_service_1 = require("./group.service");
require("rxjs/add/operator/switchMap");
var GroupProfileComponent = (function () {
    function GroupProfileComponent(_service, _route, router) {
        this._service = _service;
        this._route = _route;
        this.router = router;
        // Attributes that will be used on views
        this.title = "Perfil do Grupo";
    }
    // Method that is called on initialization of the page
    GroupProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .switchMap(function (params) { return _this._service.getGroup(params['id']); })
            .subscribe(function (group) { return _this.group = group; }, function (error) { return console.log("Impossível carregar perfil do grupo "); });
    };
    GroupProfileComponent.prototype.edit = function () {
        var _this = this;
        if (this.newName != null) {
            this._service
                .updateGroup(this.group.id, this.newName)
                .subscribe(function (success) { console.log("Editado com sucesso."); _this.router.navigate(['/group/list']); });
        }
    };
    GroupProfileComponent.prototype.remove = function () {
        var _this = this;
        this._service
            .removeGroup(this.group.id)
            .subscribe(function (success) { console.log("Removido com sucesso."); _this.router.navigate(['/group/list']); });
    };
    return GroupProfileComponent;
}());
GroupProfileComponent = __decorate([
    core_1.Component({
        templateUrl: "app/groups/group-profile.component.html"
    }),
    __metadata("design:paramtypes", [group_service_1.GroupService,
        router_1.ActivatedRoute,
        router_1.Router])
], GroupProfileComponent);
exports.GroupProfileComponent = GroupProfileComponent;
//# sourceMappingURL=group-profile.component.js.map