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
var project_form_service_1 = require("./project-form.service");
var form_1 = require("./form");
var router_1 = require("@angular/router");
var ProjectFormComponent = (function () {
    /*pushMe() {
        //botão de finalizar o form, em que irá fazer fetch a todos os dados preenchidos
        console.log("Objetivos::str: " + this.project.objetivos);
        console.log("NúmeroDeAlunos::str: " + this.project.nAlunos);
        console.log("Título::str: " + this.project.titulo);
        console.log("Escola::str: " + this.project.escola);
        console.log("Curso::str: " + this.project.curso);
        console.log("Orientadores::str: " + this.project.orientadores);
        console.log("Requesitos::str: " + this.project.requesitos);
    }*/
    function ProjectFormComponent(_projectFormService, router) {
        this._projectFormService = _projectFormService;
        this.router = router;
        this.title = 'Projetos';
    }
    ProjectFormComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.project = new form_1.IProject();
        this.onSchoolGet();
    };
    ProjectFormComponent.prototype.onChange = function (selectedDevice) {
        this.onCourseGet(selectedDevice);
    };
    //teste de get a um JSON do site referido no service respetivo
    ProjectFormComponent.prototype.onSchoolGet = function () {
        var _this = this;
        this._projectFormService.getSchool()
            .subscribe(function (data) { return _this.getSchools = data; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    ProjectFormComponent.prototype.onCourseGet = function (idS) {
        var _this = this;
        this._projectFormService.getCourse(idS)
            .subscribe(function (data) { return _this.getCourses = data; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    //teste de post a um JSON com os valores referidos no service respetivo
    ProjectFormComponent.prototype.onTestPost = function () {
        var _this = this;
        this._projectFormService.postJSON(this.project)
            .subscribe(function (data) { return _this.postData = data; }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
        var myContainer = document.querySelector("#notif");
        myContainer.innerHTML = '<div class="alert alert-success"><strong>Submissão</strong> Efectuado com Sucesso</div>';
        setTimeout(function () { myContainer.innerHTML = ''; }, 3000);
        this.router.navigate(['home']);
    };
    return ProjectFormComponent;
}());
ProjectFormComponent = __decorate([
    core_1.Component({
        templateUrl: "app/projects/project-form/project-form.component.html",
        styleUrls: ["app/projects/project-form/project-form.component.css"],
        providers: [project_form_service_1.ProjectFormService]
    }),
    __metadata("design:paramtypes", [project_form_service_1.ProjectFormService, router_1.Router])
], ProjectFormComponent);
exports.ProjectFormComponent = ProjectFormComponent;
//# sourceMappingURL=project-form.component.js.map