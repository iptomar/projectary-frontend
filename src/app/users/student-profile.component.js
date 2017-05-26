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
var users_service_1 = require("./users.service");
require("rxjs/add/operator/switchMap");
var StudentProfileComponent = (function () {
    function StudentProfileComponent(_service, //
        _route) {
        this._service = _service;
        this._route = _route;
        // Attributes that will be used on views
        this.title = 'Perfil de um utilizador';
    }
    // Method that is called on initialization of the page
    StudentProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .switchMap(function (params) { return _this._service.getStudent(+params['id']); })
            .subscribe(function (student) { return _this.student = student; }, function (error) { return console.log("Impossível carregar perfil do estudante"); });
    };
    return StudentProfileComponent;
}());
StudentProfileComponent = __decorate([
    core_1.Component({
        selector: "student-profile",
        templateUrl: "app/users/student-profile.component.html",
        providers: [users_service_1.StudentService]
    }),
    __metadata("design:paramtypes", [users_service_1.StudentService,
        router_1.ActivatedRoute])
], StudentProfileComponent);
exports.StudentProfileComponent = StudentProfileComponent;
//# sourceMappingURL=student-profile.component.js.map