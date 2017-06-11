import { Component, Input, OnInit } from "@angular/core";
import { SignUpStudentService } from "./signUp-student.service";
import { ISchool, ICourse } from "../schools/schools";
import { Router } from "@angular/router";
import { ISignUpStudent } from "./signUp";

@Component({
    templateUrl: "./signUp-student.component.html",
    providers: [SignUpStudentService]
})

export class SignUpStudentComponent implements OnInit {
    title = 'Registar Aluno';
    getSchools: ISchool[];
    getCourses: ICourse[];
    postData: string;
    private selectUndefinedOptionValue:any;

    constructor(private _signInService: SignUpStudentService, private router: Router) { }

    ngOnInit() {
        this.onSchoolGet();
    }

    // get schools from the API for the select option
    onSchoolGet() {
        this._signInService.getSchool().subscribe(
            data => this.getSchools = data,
            error => alert(error),
        );
    }

    // get schools from the API for the select option based on the
    // schools select option
    onCourseGet(school: string) {
        this._signInService.getCourse(school).subscribe(
            data => this.getCourses = data,
            error => alert(error)
        );
    }

    // sign up when the form is valid
    signUp(model: ISignUpStudent, isValid: boolean) {
        // check if model is valid
        if (isValid) {
            this._signInService.postJSON(model).subscribe(
                data => this.postData = data,
                error =>{
                    var erro = JSON.parse(error._body);
                    var message = JSON.stringify(erro.message);
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger">'+message+'</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                },
                () => {
                    let myContainer = <HTMLElement>document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-success"><strong>Registo</strong> Efectuado com Sucesso</div>';
                    setTimeout(() => { myContainer.innerHTML = '' }, 3000)
                    this.router.navigate(['home']);
                }
            );
        }
    }
}