import { Component, OnInit } from "@angular/core";
import { IProject } from "../projects/project";
import { StudentProfileService } from './users.service';
import { Student } from './users';

@Component({
	selector: "student",
	templateUrl: "app/profiles/student-profile.component.html"
    //providers: [ProfileService]
})
 
export class StudentProfileComponent implements OnInit{
    
    /*
    name='Diogo kingofCookies';
    mail='kingofcookies@psi.ipt';
    course="lei";
    college='ipt';
    projects: IProject[];
    fim='DevPSI'
    today: number = Date.now();
    */

    title = 'Perfil de um utilizador';
    saudacao = 'QUE FAZEM AQUI CUSCOS??';

    student : Student;

    constructor(private _profileService: StudentProfileService){}
    
    // method that is called on initialization of the page
    ngOnInit(): void {
        this.getStudent();
    }

    // method that uses the service 
    getStudent(): void{
        //this.student = this._profileService.getStudent();
    }

}