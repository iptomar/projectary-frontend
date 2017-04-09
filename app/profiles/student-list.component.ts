import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { StudentService } from './users.service';
import { Student } from './users';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: "app/profiles/student-list.component.html",
    providers: [StudentService]
})

export class StudentListComponent implements OnInit {
    // Structure that will be used on views
    students: Student[];
    errorMessage: string;
    searchFilter: string;
    // 
    title = 'Lista de utilizadores';
    constructor(
        private _service: StudentService,
        private _location: Location
    ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._service.getStudents()
            .subscribe(students => this.students = students, 
                error => this.errorMessage = <any> error);
    }

    // Method that navigates backward one step in the browser's history
    // ?? Not in use yet
    goBack(): void {
        this._location.back();
    }
}