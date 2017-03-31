import { Component, OnInit } from "@angular/core";
import { IProject } from "./project";
import { ProjectService } from "./project.service";

@Component({
    moduleId: module.id,
	templateUrl: "./project-list.component.html"
})
 
export class ProjectListComponent implements OnInit{
    projects: IProject[];
    errorMessage: string;
    searchFilter: string;
    title = 'Projetos Públicos';
    saudacao = ''

    constructor(private _projectService : ProjectService){}

    ngOnInit(): void {
        this._projectService.getProducts()
            .subscribe(projects => this.projects = projects,
                    error => this.errorMessage = <any> error);
    }
}
 