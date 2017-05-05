import { Component, Input, OnInit } from "@angular/core";
import { ProjectApplicationService } from "./project-application.service";
import { IProject } from "./form";
import { ISchool } from "./schools";

@Component({
    templateUrl: "app/projects/project-application/project-application.component.html",
    styleUrls: ["app/projects/project-application/project-application.component.css"],
    providers: [ProjectApplicationService]
})

export class ProjectApplicationComponent implements OnInit{
    title = 'Projetos';
    getSchools: ISchool[];
    postData: string;
    project: IProject;

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.project = new IProject();
        this.onTestGet();
    }

    constructor(private _projectFormService: ProjectApplicationService) { }

    //teste de get a um JSON do site referido no service respetivo
    onTestGet() {
        this._projectFormService.getSchool()
            .subscribe(
            data => this.getSchools = data,
            error => alert(error),
            () => console.log("Finished")
            );
    }

    //teste de post a um JSON com os valores referidos no service respetivo
    onTestPost() {
        this._projectFormService.postJSON(this.project)
            .subscribe(
                data => this.postData = data,
                error => alert(error),
                () => console.log("Finished")
            );
    }
}