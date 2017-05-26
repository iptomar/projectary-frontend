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
var router_1 = require("@angular/router");
var GroupCreateComponent = (function () {
    function GroupCreateComponent(_service, router) {
        this._service = _service;
        this.router = router;
        this.title = 'Criar Grupo';
    }
    GroupCreateComponent.prototype.create = function () {
        this._service
            .postGroup(this.name, this.password)
            .subscribe(function (success) { return console.log("Grupo criado com sucesso."); });
        var myContainer = document.querySelector("#notif");
        myContainer.innerHTML = '<div class="alert alert-success">Criação de <strong>Grupo</strong> Efectuado com Sucesso</div>';
        setTimeout(function () { myContainer.innerHTML = ''; }, 3000);
        this.router.navigate(['home']);
    };
    return GroupCreateComponent;
}());
GroupCreateComponent = __decorate([
    core_1.Component({
        templateUrl: "app/groups/group-create.component.html",
        providers: [group_service_1.GroupService]
    }),
    __metadata("design:paramtypes", [group_service_1.GroupService, router_1.Router])
], GroupCreateComponent);
exports.GroupCreateComponent = GroupCreateComponent;
//# sourceMappingURL=group-create.component.js.map