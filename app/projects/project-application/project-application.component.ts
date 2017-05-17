import { Component, Input, OnInit } from "@angular/core";
import { ProjectApplicationService } from "./project-application.service";

@Component({
    templateUrl: "app/projects/project-application/project-application.component.html",
    styleUrls: ["app/projects/project-application/project-application.component.css"],
    providers: [ProjectApplicationService]
})

export class ProjectApplicationComponent implements OnInit{
    title = 'Projetos';
    postData: string;

    constructor(private _projectFormService: ProjectApplicationService) { }
    
    ngOnInit() {

    }

    

}