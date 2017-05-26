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
var DashboardListUserBlockComponent = (function () {
    function DashboardListUserBlockComponent(_service) {
        this._service = _service;
        this.title = "Dashboard";
    }
    // Method that is called on initialization of the page
    DashboardListUserBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getStudents().subscribe(function (students) { return _this.students = students; }, function (error) { return console.log("Impossível carregar lista de estudantes"); });
    };
    DashboardListUserBlockComponent.prototype.onClick = function (id) {
        this.onBlockPut(id.toString());
        this.ngOnInit();
    };
    DashboardListUserBlockComponent.prototype.onBlockPut = function (ids) {
        var _this = this;
        this._service.putBlockJSON(ids, this.student)
            .subscribe(function (data) { return _this.putData = data; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    return DashboardListUserBlockComponent;
}());
DashboardListUserBlockComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./dashboard_user_block_list.component.html",
        styleUrls: ["./dashboard_user_block_list.component.css"]
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardListUserBlockComponent);
exports.DashboardListUserBlockComponent = DashboardListUserBlockComponent;
//# sourceMappingURL=dashboard_user_block_list.component.js.map