"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NotFoundComponent = (function () {
    function NotFoundComponent() {
        this.title = '404';
        this.saudacao = 'Página Não encontrada!';
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    core_1.Component({
        template: "\n    <h1 style=\"color:#800\">{{title}}</h1>\n    <p  style=\"color:#800\">{{saudacao}}</p>\n    <hr>\n  "
    })
], NotFoundComponent);
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=nfound.component.js.map