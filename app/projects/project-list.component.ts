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
    errorMessage: string;
    searchFilter: string;
    hasGroup: boolean = true;
    group: Group;
    selectedProject: string;
    success: boolean= false;
    title = 'Projetos Públicos';
    error: boolean=false;

    constructor(private _projectService : ProjectService, private renderer:Renderer){
    }

    ngOnInit(): void {
        var data = JSON.parse(localStorage.getItem('currentUser'));    
        this.group = new Group(data.group_id, data.group_name);

        this._projectService.getProjects()
            .subscribe(projects => this.projects = projects,
                    error => this.errorMessage = <any> error);
    }

    ApplicationSubmit(id: string){
        this.success = false;
        this.error= false;
        this._projectService.postApplication(parseInt(id), this.group.id)
            .subscribe(success => this.success = true, error =>{this.success = false; this.error= true;});
    }
    
    
}
 