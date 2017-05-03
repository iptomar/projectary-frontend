import { Component, Input, OnInit } from "@angular/core";
import { ProjectFormService } from "./project-form.service";
import { IProject } from "./form";
import { ISchool } from "./schools";
//import {} from "form.json";

@Component({
    templateUrl: "app/projects/project-form/project-form.component.html",
    styleUrls: ["app/projects/project-form/project-form.component.css"],
    providers: [ProjectFormService]
})

export class ProjectFormComponent implements OnInit{
    title = 'Projetos';
    getSchools: ISchool[];
    postData: string;
    project: IProject;

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.onTestGet();
    }

    pushMe() {
        //botão de finalizar o form, em que irá fazer fetch a todos os dados preenchidos
        console.log("Objetivos::str: " + this.project.objetivos);
        console.log("NúmeroDeAlunos::str: " + this.project.nAlunos);
        console.log("Título::str: " + this.project.titulo);
        console.log("Escola::str: " + this.project.escola);
        console.log("Curso::str: " + this.project.curso);
        console.log("Orientadores::str: " + this.project.orientadores);
        console.log("Requesitos::str: " + this.project.requesitos);
    }

    constructor(private _projectFormService: ProjectFormService) { }

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
                data => this.postData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")
            );
    }
}