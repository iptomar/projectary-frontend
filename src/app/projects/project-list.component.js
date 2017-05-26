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
var project_service_1 = require("./project.service");
var ProjectListComponent = (function () {
    function ProjectListComponent(_projectService, renderer) {
        this._projectService = _projectService;
        this.renderer = renderer;
        this.hasGroup = true;
        this.success = false;
        this.title = 'Projetos Públicos';
        this.loading = false;
        this.error = false;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectService.getUserGroups()
            .subscribe(function (groups) { return _this.groups = groups; }, function (error) { return _this.errorMessage = error; });
        this._projectService.getProjects()
            .subscribe(function (projects) { return _this.projects = projects; }, function (error) { return _this.errorMessage = error; });
    };
    ProjectListComponent.prototype.ApplicationSubmit = function (id) {
        var _this = this;
        this.success = false;
        this.error = false;
        this.loading = true;
        this._projectService.postApplication(parseInt(id), this.group_id)
            .subscribe(function (success) { return _this.success = true; }, function (error) { _this.success = false; _this.error = true; });
        this.loading = false;
    };
    return ProjectListComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", core_1.ElementRef)
], ProjectListComponent.prototype, "modal", void 0);
ProjectListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./project-list.component.html",
        styleUrls: ["./project-list.component.css"],
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService, core_1.Renderer])
], ProjectListComponent);
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map