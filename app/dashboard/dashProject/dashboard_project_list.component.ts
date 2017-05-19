import { Component, OnInit } from "@angular/core";
import { IProjectToList } from "../form";
import { DashboardService } from "../dashboard.service";

@Component({
	templateUrl: "app/dashboard/dashProject/dashboard_project_list.component.html",
    providers: [DashboardService]
})

export class DashboardProjectListComponent implements OnInit{
    
    projects: IProjectToList[];
    errorMessage: string;
    searchFilter: string;
    title = 'Projetos por Atribuir';
    
    constructor(private _service : DashboardService){}
    
    ngOnInit(): void {
        this._service.getProjectList()
            .subscribe(
                projects => {this.projects = projects; console.log(projects);},
                error => this.errorMessage = <any> error
            );
    }
}