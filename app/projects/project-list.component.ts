import { Component, OnInit, Input, ElementRef, ViewChild, Renderer } from "@angular/core";
import { IProject, Application } from "./project";
import { ProjectService } from "./project.service";
import { ModalComponent } from "../utils/modal.component";
import { Group, IGroup } from "../groups/group";

@Component({
    moduleId: module.id,
	templateUrl: "./project-list.component.html",
    styleUrls:["./project-list.component.css"],
})
 
export class ProjectListComponent implements OnInit{

    @ViewChild('modal') modal:ElementRef;
    
    projects: IProject[];
    groups: IGroup[]
    errorMessage: string;
    searchFilter: string;
    hasGroup: boolean = true;
    group_id: number;
    selectedProject: string;
    success: boolean= false;
    title = 'Projetos Públicos';
    loading = false;
    error: boolean=false;

    constructor(private _projectService : ProjectService, private renderer:Renderer){
    }

    ngOnInit(): void {
        this._projectService.getUserGroups()
            .subscribe(groups => this.groups = groups,
                    error => this.errorMessage = <any> error);
        
        this._projectService.getProjects()
            .subscribe(projects => this.projects = projects,
                    error => this.errorMessage = <any> error);
    }

    ApplicationSubmit(id: string){
        this.success = false;
        this.error= false;
        this.loading = true;
        this._projectService.postApplication(parseInt(id), this.group_id)
            .subscribe(success => this.success = true, error =>{this.success = false; this.error= true;});
        this.loading = false;
    }
    
    
}
 