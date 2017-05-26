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
var group_service_1 = require("./group.service");
require("rxjs/add/operator/switchMap");
var GroupListComponent = (function () {
    function GroupListComponent(_service) {
        this._service = _service;
        this.title = 'Lista de Grupos';
    }
    // Method that is called on initialization of the page
    GroupListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.listGroups().subscribe(function (groups) { return _this.groups = groups; }, function (error) { return console.log("Impossível carregar lista de grupos"); });
    };
    return GroupListComponent;
}());
GroupListComponent = __decorate([
    core_1.Component({
        templateUrl: "app/groups/group-list.component.html",
        providers: [group_service_1.GroupService]
    }),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupListComponent);
exports.GroupListComponent = GroupListComponent;
//# sourceMappingURL=group-list.component.js.map