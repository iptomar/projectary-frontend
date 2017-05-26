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
var signIn_student_service_1 = require("./signIn-student.service");
var register_1 = require("./register");
var router_1 = require("@angular/router");
var SignInStudentComponent = (function () {
    function SignInStudentComponent(_signInService, router) {
        this._signInService = _signInService;
        this.router = router;
        this.title = 'Registar Aluno';
    }
    SignInStudentComponent.prototype.ngOnInit = function () {
        this.register = new register_1.Register();
        this.onSchoolGet();
    };
    SignInStudentComponent.prototype.onChange = function (selectedDevice) {
        this.onCourseGet(selectedDevice);
    };
    SignInStudentComponent.prototype.check = function (password, confirmpassword) {
        console.log(password);
        console.log(confirmpassword);
        if (password == confirmpassword) {
            this.onSignInStPost();
        }
        else {
            alert("Password Invalid");
        }
    };
    //teste de get a um JSON do site referido no service respetivo
    SignInStudentComponent.prototype.onSchoolGet = function () {
        var _this = this;
        this._signInService.getSchool()
            .subscribe(function (data) { return _this.getSchools = data; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    SignInStudentComponent.prototype.onCourseGet = function (idS) {
        var _this = this;
        this._signInService.getCourse(idS)
            .subscribe(function (data) { return _this.getCourses = data; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    //teste de post a um JSON com os valores referidos no service respetivo
    SignInStudentComponent.prototype.onSignInStPost = function () {
        var _this = this;
        this._signInService.postJSON(this.register)
            .subscribe(function (data) { return _this.postData = data; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
        var myContainer = document.querySelector("#notif");
        myContainer.innerHTML = '<div class="alert alert-success"><strong>Registo</strong> Efectuado com Sucesso</div>';
        setTimeout(function () { myContainer.innerHTML = ''; }, 3000);
        this.router.navigate(['home']);
    };
    return SignInStudentComponent;
}());
SignInStudentComponent = __decorate([
    core_1.Component({
        templateUrl: "app/signIn/signIn-student.component.html",
        providers: [signIn_student_service_1.SignInStudentService]
    }),
    __metadata("design:paramtypes", [signIn_student_service_1.SignInStudentService, router_1.Router])
], SignInStudentComponent);
exports.SignInStudentComponent = SignInStudentComponent;
//# sourceMappingURL=signIn-student.component.js.map