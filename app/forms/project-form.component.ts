import { Component, Input, OnInit } from "@angular/core";
import { ProjectFormService } from "./project-form.service";
import { createProject } from "./form";
import { ISchool } from "./schools";
//import {} from "form.json";

@Component({
    selector: "my-app",
    templateUrl: "app/forms/project-form.component.html",
    styleUrls: ["app/forms/project-form.component.css"],
    providers: [ProjectFormService]
})

export class ProjectFormComponent implements OnInit{
    title = 'Projetos';
    saudacao = '';
    getSchools: ISchool[];
    postData: string;

    public project = new createProject();

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
        this.sendData();
        this._projectFormService.postJSON()
            .subscribe(
            data => this.postData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
            );
    }

    sendData() {
        this._projectFormService.submit(
            this.project
        );
    }


}