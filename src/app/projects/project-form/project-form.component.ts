import { Component, Input, OnInit } from "@angular/core";
import { ProjectFormService } from "./project-form.service";
import { IProject } from "./form";
import { ISchool, ICourse } from "../../schools/schools";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./project-form.component.html",
    styleUrls: ["./project-form.component.css"],
    providers: [ProjectFormService]
})

export class ProjectFormComponent implements OnInit{
    title = 'Projetos';
    getSchools: ISchool[];
    getCourses: ICourse[];
    postData: string;
    project: IProject;

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.project = new IProject();
        this.onSchoolGet();
    }
    onChange(selectedDevice:string) {
      this.onCourseGet(selectedDevice);
    }

    /*pushMe() {
        //botão de finalizar o form, em que irá fazer fetch a todos os dados preenchidos
        console.log("Objetivos::str: " + this.project.objetivos);
        console.log("NúmeroDeAlunos::str: " + this.project.nAlunos);
        console.log("Título::str: " + this.project.titulo);
        console.log("Escola::str: " + this.project.escola);
        console.log("Curso::str: " + this.project.curso);
        console.log("Orientadores::str: " + this.project.orientadores);
        console.log("Requesitos::str: " + this.project.requesitos);
    }*/

    constructor(private _projectFormService: ProjectFormService, private router: Router) { }

    
    //teste de get a um JSON do site referido no service respetivo
    onSchoolGet() {
        this._projectFormService.getSchool()
            .subscribe(
            data => this.getSchools = data,
            error => alert(error),
            () => console.log("Finished")
            );
    }
    onCourseGet(idS:string) {
      this._projectFormService.getCourse(idS)
            .subscribe(
            data => this.getCourses = data,
            error => alert(error),
            () => console.log("Finished")
            );
    }

    //teste de post a um JSON com os valores referidos no service respetivo
    onTestPost() {
        this._projectFormService.postJSON(this.project)
            .subscribe(
                data => this.postData = data,
                error =>{
                    var erro = JSON.parse(error._body);
                    var message = JSON.stringify(erro.message);
                    //console.log(error);
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger">'+message+'</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                },
                () => {
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-success">Projeto <strong>Criado</strong> com Sucesso</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                    this.router.navigate(['home']);
                }
            );
    }
}