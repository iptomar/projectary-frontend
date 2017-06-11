import { Component, Input, OnInit } from "@angular/core";
import { StudentService } from './users.service';
import { ISchool, ICourse } from "../schools/schools";
import { IStudent } from "./users";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./chpass.component.html",
    providers: [StudentService]
})

export class ChangePasswordComponent {
    title = 'Alterar Password';
    getStudent: IStudent[];
    private systemPass: string;
    private putNewPass: string;
    student: IStudent;

    constructor(private _servicePass: StudentService, private router: Router) { }

    check(oldpassword: string, newpassword: string, confirmpassword: string) {
        this.systemPass = (JSON.parse(localStorage.getItem('currentUser')).password);
        if (this.systemPass == oldpassword) {
            if (newpassword == confirmpassword) {
                if (this.systemPass != confirmpassword) {
                    this.putNewPass = confirmpassword;
                    this.onChPassPut();
                } else {
                    let myContainer = <HTMLElement>document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-warning">A nova password deve ser <strong>diferente</strong> da atual</div>';
                    setTimeout(() => { myContainer.innerHTML = '' }, 3000)
                }
            } else {
                let myContainer = <HTMLElement>document.querySelector("#notif");
                myContainer.innerHTML = '<div class="alert alert-warning">Confirmar Password deverá ser <strong>igual</strong> à nova Password</div>';
                setTimeout(() => { myContainer.innerHTML = '' }, 3000)
            }
        } else {
            let myContainer = <HTMLElement>document.querySelector("#notif");
            myContainer.innerHTML = '<div class="alert alert-warning">A palavra pass atual está <strong>incorreta</strong></div>';
            setTimeout(() => { myContainer.innerHTML = '' }, 3000)
        }
    }

    onChPassPut() {
        this._servicePass.putChPassJSON(this.putNewPass).subscribe(
            data => {
                let myContainer = <HTMLElement>document.querySelector("#notif");
                myContainer.innerHTML = '<div class="alert alert-success">Password <strong>alterada</strong> com Sucesso</div>';
                setTimeout(() => { myContainer.innerHTML = '' }, 3000)
                window.location.reload();
            },
            error => {
                let myContainer = <HTMLElement>document.querySelector("#notif");
                myContainer.innerHTML = '<div class="alert alert-danger">' + error + '</div>';
                setTimeout(() => { myContainer.innerHTML = '' }, 3000)
            }
        );
    }
}