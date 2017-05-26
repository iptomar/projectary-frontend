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
var dashboard_service_1 = require("../dashboard.service");
require("rxjs/add/operator/switchMap");
var DashboardProjectProfileComponent = (function () {
    function DashboardProjectProfileComponent(_service, _route) {
        this._service = _service;
        this._route = _route;
        // Attributes that will be used on views
        this.title = 'Perfil de um projeto por atribuir';
    }
    // Method that is called on initialization of the page
    DashboardProjectProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .switchMap(function (params) { return _this._service.getProject(+params['id']); })
            .subscribe(function (project) { return _this.project = project; }, function (error) { return console.log("Impossível carregar perfil do projeto"); });
        this.project.description = this.project.description.substring(0, 100);
    };
    DashboardProjectProfileComponent.prototype.onSelectionChange = function (id) {
        this.groupIdToAssign = id;
    };
    DashboardProjectProfileComponent.prototype.assigns = function () {
        var _this = this;
        this._service
            .postAcceptGroup(this.groupIdToAssign, this.project.id)
            .subscribe(function (error) { return console.log("Não foi possível aceitar o grupo " + _this.groupIdToAssign); });
    };
    return DashboardProjectProfileComponent;
}());
DashboardProjectProfileComponent = __decorate([
    core_1.Component({
        templateUrl: "app/dashboard/dashProject/dashboard_project_profile.component.html",
        styleUrls: ["app/dashboard/dashProject/dashboard_project.component.css"]
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService,
        router_1.ActivatedRoute])
], DashboardProjectProfileComponent);
exports.DashboardProjectProfileComponent = DashboardProjectProfileComponent;
//# sourceMappingURL=dashboard_project_profile.component.js.map