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
var GroupJoinComponent = (function () {
    function GroupJoinComponent(_service) {
        this._service = _service;
        this.title = 'Juntar a Grupo';
    }
    GroupJoinComponent.prototype.join = function () {
        this._service
            .joinGroup(this.name, this.password)
            .subscribe(function (error) { return console.log("Join ao grupo com sucesso."); });
    };
    return GroupJoinComponent;
}());
GroupJoinComponent = __decorate([
    core_1.Component({
        templateUrl: "app/groups/group-join.component.html",
        providers: [group_service_1.GroupService]
    }),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupJoinComponent);
exports.GroupJoinComponent = GroupJoinComponent;
//# sourceMappingURL=group-join.component.js.map