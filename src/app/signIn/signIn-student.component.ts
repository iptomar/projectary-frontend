import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignInStudentService } from "./signIn-student.service";
import { ISchool, ICourse } from "../schools/schools";
import { Router } from "@angular/router";
import { ISignInStudent } from "./signIn";

@Component({
    templateUrl: "./signIn-student.component.html",
    providers: [SignInStudentService]
})

export class SignInStudentComponent implements OnInit {
    title = 'Registar Aluno';
    getSchools: ISchool[];
    getCourses: ICourse[];
    postData: string;
    emailValid = false;

    constructor(private _signInService: SignInStudentService, private router: Router) { }

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

    // checks if an the email input is invalid
    getEmailStatus() {
        this.emailValid = false;
        if (document.querySelector("#tfSigninUserEmail:invalid") != null) {
            this.emailValid = true;
        }
    }

    // sign up when the form is valid
    signUp(model: ISignInStudent, isValid: boolean) {
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