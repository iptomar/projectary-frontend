import { Component, Input, OnInit } from "@angular/core";
import { SignInStudentService } from "./signIn-student.service";
import { ISchool, ICourse } from "../schools/schools";

@Component({
  templateUrl: "app/signIn/signIn-student.component.html",
    providers: [SignInStudentService]
})

export class SignInStudentComponent implements OnInit {
  title = 'Registar Aluno';
  getSchools: ISchool[];
  getCourses: ICourse[];
  ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.onSchoolGet();
        this.onCourseGet();
    }

    constructor(private _signInService: SignInStudentService) { }

    //teste de get a um JSON do site referido no service respetivo
    onSchoolGet() {
        this._signInService.getSchool()
            .subscribe(
            data => this.getSchools = data,
            error => alert(error),
            () => console.log("Finished")
            );
    }
    onCourseGet() {
       this._signInService.getCourse()
            .subscribe(
            data => this.getCourses = data,
            error => alert(error),
            () => console.log("Finished")
            );
    }
}