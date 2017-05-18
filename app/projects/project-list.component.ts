import { Component, OnInit, Input, ElementRef, ViewChild, Renderer } from "@angular/core";
import { IProject } from "./project";
import { ProjectService } from "./project.service";
import { ModalComponent } from "../utils/modal.component";
import { Group } from "../groups/group";

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

    title = 'Projetos Públicos';

    constructor(private _projectService : ProjectService, private renderer:Renderer){
        this.group = new Group();
        this.group.id=1;
        this.group.name="Benfica";
    }

    ngOnInit(): void {
        
        this._projectService.getProjects()
            .subscribe(projects => this.projects = projects,
                    error => this.errorMessage = <any> error);
    }

    ApplicationSubmit(id: string){
        console.log(id);
    
    }
    
    
}
 