import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { StudentService } from './users.service';
import { IStudent } from './users';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: "dashboard",
    templateUrl: "app/users/student-list.component.html",
    providers: [StudentService]
})

export class StudentListComponent implements OnInit {
    
    // Attributes that will be used on views
    students: IStudent[];
    errorMessage: string;
    searchFilter: string;
    title = 'Lista de utilizadores';

    constructor( private _service: StudentService ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._service.getStudents().subscribe(
            students => this.students = students , 
            error =>  console.log("Impossível carregar lista de estudantes")
        );
    }   
}