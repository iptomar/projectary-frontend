import { Component, Input, OnInit } from "@angular/core";
import { StudentService } from './users.service';
import { ISchool, ICourse } from "../schools/schools";
import { IStudent } from "./users";
@Component({
    template: `
    <h2>{{title}}</h2>
    <hr>
     <div class="form-group">
        <label for="password" class="col-md-3 control-label">Password Antiga</label>
            <div class="col-md-9">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                    <input type="password" class="form-control" [(ngModel)]=oldpassword name="password" id="oldpassword" placeholder="Enter your Old Password" />
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="password" class="col-md-3 control-label">Password</label>
            <div class="col-md-9">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                    <input type="password" class="form-control" [(ngModel)]=newpassword name="password" id="newpassword" placeholder="Enter your new Password" />
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="confirm" class="col-md-3 control-label">Confirmar Password</label>
            <div class="col-md-9">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                    <input type="password" class="form-control" [(ngModel)]=password name="confirm" id="confirm" placeholder="Confirm your Password" />
                </div>
            </div>
        </div>
  `
})

export class ChangePasswordComponent {
    title = 'Alterar Password';
    getStudent: IStudent[];
    putNewPass: string;
    student: IStudent;
    constructor( private _serviceStudent: StudentService ) { }
    onChPassPut() {
        this._serviceStudent.putChPassJSON(this.student)
            .subscribe(
                data => this.putNewPass = data,
                error => alert(error),
                () => console.log("Finished")
            );
    }
}