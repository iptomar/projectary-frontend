import { Component, Input } from "@angular/core";
import { ProjectFormService } from "./project-form.service";
import { createProject } from "./form";

@Component({
    selector: "my-app",
    templateUrl: "app/forms/project-form.component.html",
    styleUrls: ["app/forms/project-form.component.css"],
    providers: [createProject,ProjectFormService]
})

export class ProjectFormComponent {
    getData: string;
    postData: string;

    //data para fazer fetch
    objetivos: string;
    nAlunos: string;
    titulo: string;
    escola: string;
    curso: string;
    orientadores: string;
    requesitos: string;
    project: createProject;


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

    constructor(private _projectFormService: ProjectFormService) {

    }

    //teste de get a um JSON do site referido no service respetivo
    onTestGet() {
        this._projectFormService.getCurrentTime()
            .subscribe(
            data => this.getData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
            );
    }

    //teste de post a um JSON com os valores referidos no service respetivo
    onTestPost() {
        this._projectFormService.postJSON()
            .subscribe(
            data => this.postData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
            );
    }

    /*sendData() {
        this._projectFormService.submit(
            this.objetivos,
            this.nAlunos,
            this.titulo,
            this.escola,
            this.curso,
            this.orientadores,
            this.requesitos
        );
    }

    bothFuc() {
        this.sendData;
        this.onTestPost();
    }*/

}