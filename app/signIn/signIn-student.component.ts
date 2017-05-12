import { Component, Input, OnInit } from "@angular/core";
import { SignInStudentService } from "./signIn-student.service";
import { ISchool, ICourse } from "../schools/schools";
import { ISignInStudent } from "./signIn";


@Component({
  templateUrl: "app/signIn/signIn-student.component.html",
    providers: [SignInStudentService]
})

export class SignInStudentComponent implements OnInit {
  title = 'Registar Aluno';
  getSchools: ISchool[];
  getCourses: ICourse[];
  postData: string;
  signIn: ISignInStudent;
  
  ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //this.signIn = new ISignInStudent();
        this.onSchoolGet();
    }
    onChange(selectedDevice:string) {
      this.onCourseGet(selectedDevice);
    }
    constructor(private _signInService: SignInStudentService) {
      
     }
    
    //teste de get a um JSON do site referido no service respetivo
    onSchoolGet() {
        this._signInService.getSchool()
            .subscribe(
            data => this.getSchools = data,
            error => alert(error),
            () => console.log("Finished")
            );
    }
    onCourseGet(idS:string) {
      this._signInService.getCourse(idS)
            .subscribe(
            data => this.getCourses = data,
            error => alert(error),
            () => console.log("Finished")
            );
    }
    //teste de post a um JSON com os valores referidos no service respetivo
    onSignInStPost() {
        this._signInService.postJSON(this.signIn)
            .subscribe(
                data => this.postData = data,
                error => alert(error),
                () => console.log("Finished")
            );
    }
}