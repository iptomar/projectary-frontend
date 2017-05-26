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
var dashboard_service_1 = require("../dashboard.service");
var DashboardProjectListComponent = (function () {
    function DashboardProjectListComponent(_service) {
        this._service = _service;
        this.title = 'Projetos por Atribuir';
    }
    DashboardProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getProjectList()
            .subscribe(function (projects) { _this.projects = projects; console.log(projects); }, function (error) { return console.log("Impossível carregar lista de projetos por atribuir"); });
    };
    return DashboardProjectListComponent;
}());
DashboardProjectListComponent = __decorate([
    core_1.Component({
        templateUrl: "app/dashboard/dashProject/dashboard_project_list.component.html"
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardProjectListComponent);
exports.DashboardProjectListComponent = DashboardProjectListComponent;
//# sourceMappingURL=dashboard_project_list.component.js.map