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
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.loading = false;
        this.error = false;
        this.autenticated = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this._httpService.logout();
        this.autenticated = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this._httpService.login(this.username, this.password).subscribe(function (result) {
            _this.error = false;
            _this.autenticated = true;
            _this.name = JSON.parse(localStorage.getItem('currentUser')).name;
            _this.isadmin = JSON.parse(localStorage.getItem('currentUser')).isadmin;
            var myContainer = document.querySelector("#notif");
            myContainer.innerHTML = '<div class="alert alert-success"><strong>Login</strong> Efectuado com Sucesso</div>';
            setTimeout(function () { myContainer.innerHTML = ''; }, 3000);
        }, function (error) {
            _this.error = true;
            _this.loading = false;
            console.log("Dados incorrectos");
        });
    };
    LoginComponent.prototype.logout = function () {
        this._httpService.logout();
        this.autenticated = false;
        this.loading = false;
        var myContainer = document.querySelector("#notif");
        myContainer.innerHTML = '<div class="alert alert-warning"><strong>Logout</strong> Efectuado com Sucesso</div>';
        setTimeout(function () { myContainer.innerHTML = ''; }, 3000);
        this.router.navigate(['home']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login",
        templateUrl: "app/menu/login/login.component.html",
        styleUrls: ["app/menu/login/login.component.css"],
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map