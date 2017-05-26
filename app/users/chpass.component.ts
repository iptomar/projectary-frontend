import { Component, Input, OnInit } from "@angular/core";
import { StudentService } from './users.service';
import { ISchool, ICourse } from "../schools/schools";
import { IStudent } from "./users";
import { Router } from "@angular/router";

@Component({
    template: `
    <h2>{{title}}</h2>
    <hr>
     <div class="form-group">
        <label for="password" class="col-md-3 control-label">Password Antiga</label>
            <div class="col-md-9">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                    <input type="password" class="form-control" #oldpassword  name="password" id="oldpassword" placeholder="Enter your Old Password" />
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="password" class="col-md-3 control-label">Password</label>
            <div class="col-md-9">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                    <input type="password" class="form-control" #newpassword name="password" id="newpassword" placeholder="Enter your new Password" />
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="confirm" class="col-md-3 control-label">Confirmar Password</label>
            <div class="col-md-9">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                    <input type="password" class="form-control" #confirmpassword name="confirm" id="confirm" placeholder="Confirm your Password" />
                </div>
            </div>
        </div>
        <button (click)="check(oldpassword.value,newpassword.value,confirmpassword.value)" class="btn btn-primary">Alterar Password</button>
  `
})

export class ChangePasswordComponent {
    title = 'Alterar Password';
    getStudent: IStudent[];
    private systemPass: string;
    private putNewPass: string;
    student: IStudent;


    constructor( private _servicePass: StudentService, private router: Router ) { }
    check(oldpassword:string,newpassword:string,confirmpassword:string){ 
        this.systemPass=(JSON.parse(localStorage.getItem('currentUser')).password);
        if(this.systemPass == oldpassword){
            if(newpassword == confirmpassword){
               if(this.systemPass != confirmpassword){
                   this.putNewPass = confirmpassword;
                   this.onChPassPut();
               }else{
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-warning">A nova password deve ser <strong>diferente</strong> da atual</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
               }
            }else{
                let myContainer = <HTMLElement> document.querySelector("#notif");
                myContainer.innerHTML = '<div class="alert alert-warning">Confirmar Password deverá ser <strong>igual</strong> à nova Password</div>';
                setTimeout(() => { myContainer.innerHTML = ''}, 3000)
            }
        }else{
            let myContainer = <HTMLElement> document.querySelector("#notif");
            myContainer.innerHTML = '<div class="alert alert-warning">A palavra pass atual está <strong>incorreta</strong></div>';
            setTimeout(() => { myContainer.innerHTML = ''}, 3000)
        }
    }

    onChPassPut() {
        this._servicePass.putChPassJSON(this.putNewPass)
            .subscribe(
                data => {let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-success">Password <strong>alterada</strong> com Sucesso</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                    window.location.reload(); },
                error => {
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger"><strong>Erro</strong> no join do grupo</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                },          
                () => console.log("Finished")
            );
    }
}