import { Component, Input, OnInit } from "@angular/core";
import { SignInStudentService } from "./signIn-student.service";
import { ISchool, ICourse } from "../schools/schools";
import { Register } from "./register";
import { Router } from "@angular/router";


@Component({
  templateUrl: "app/signIn/signIn-student.component.html",
    providers: [SignInStudentService]
})

export class SignInStudentComponent implements OnInit {
  title = 'Registar Aluno';
  getSchools: ISchool[];
  getCourses: ICourse[];
  postData: string;
  register: Register;
  
    constructor(private _signInService: SignInStudentService, private router: Router) {}

  ngOnInit() {
        this.register = new Register();
        this.onSchoolGet();
    }

    onChange(selectedDevice:string) {
      this.onCourseGet(selectedDevice);
    }
    check(password:string,confirmpassword:string){
        console.log(password);
        console.log(confirmpassword);
        if(password == confirmpassword){
            this.onSignInStPost();
        }else{
            alert("Password Invalid");
        }
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
        this._signInService.postJSON(this.register)
            .subscribe(
                data => this.postData = data,
                error => alert(error),
                () => console.log("Finished")
            );
            let myContainer = <HTMLElement> document.querySelector("#notif");
            myContainer.innerHTML = '<div class="alert alert-success"><strong>Registo</strong> Efectuado com Sucesso</div>';
            setTimeout(() => { myContainer.innerHTML = ''}, 3000)
            this.router.navigate(['home']);
    }
}