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
var users_service_1 = require("./users.service");
var router_1 = require("@angular/router");
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(_servicePass, router) {
        this._servicePass = _servicePass;
        this.router = router;
        this.title = 'Alterar Password';
    }
    ChangePasswordComponent.prototype.check = function (oldpassword, newpassword, confirmpassword) {
        this.systemPass = (JSON.parse(localStorage.getItem('currentUser')).password);
        if (this.systemPass == oldpassword) {
            if (newpassword == confirmpassword) {
                if (this.systemPass != confirmpassword) {
                    this.putNewPass = confirmpassword;
                    this.onChPassPut();
                }
                else {
                    console.log("Condição Invalida 3ª");
                }
            }
            else {
                console.log("Condição Invalida 2ª");
            }
        }
        else {
            console.log("Condição Invalida 1ª");
        }
    };
    ChangePasswordComponent.prototype.onChPassPut = function () {
        this._servicePass.putChPassJSON(this.putNewPass)
            .subscribe(function (data) { console.log("Password mudada com sucesso."); window.location.reload(); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    core_1.Component({
        template: "\n    <h2>{{title}}</h2>\n    <hr>\n     <div class=\"form-group\">\n        <label for=\"password\" class=\"col-md-3 control-label\">Password Antiga</label>\n            <div class=\"col-md-9\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\" aria-hidden=\"true\"></i></span>\n                    <input type=\"password\" class=\"form-control\" #oldpassword  name=\"password\" id=\"oldpassword\" placeholder=\"Enter your Old Password\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\n            <div class=\"col-md-9\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\" aria-hidden=\"true\"></i></span>\n                    <input type=\"password\" class=\"form-control\" #newpassword name=\"password\" id=\"newpassword\" placeholder=\"Enter your new Password\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"confirm\" class=\"col-md-3 control-label\">Confirmar Password</label>\n            <div class=\"col-md-9\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\" aria-hidden=\"true\"></i></span>\n                    <input type=\"password\" class=\"form-control\" #confirmpassword name=\"confirm\" id=\"confirm\" placeholder=\"Confirm your Password\" />\n                </div>\n            </div>\n        </div>\n        <button (click)=\"check(oldpassword.value,newpassword.value,confirmpassword.value)\" class=\"btn btn-primary\">Alterar Password</button>\n  "
    }),
    __metadata("design:paramtypes", [users_service_1.StudentService, router_1.Router])
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=chpass.component.js.map