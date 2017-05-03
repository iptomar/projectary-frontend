import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { IProject } from "../projects/project";
import { StudentService } from './users.service';
import { IStudent } from './users';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: "student-profile",
    templateUrl: "app/profiles/student-profile.component.html",
    providers: [StudentService]
})

export class StudentProfileComponent implements OnInit {

    // 
    title = 'Perfil de um utilizador';
    // Structure that will be used on views
    student: IStudent;

    constructor(
        private _service: StudentService,   //
        private _route: ActivatedRoute,
        private _location: Location
    ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._route.params
            .switchMap((params: Params) => this._service.getStudent(+params['id']))
            .subscribe(student => this.student = student);
    }

    // Method that navigates backward one step in the browser's history
    // ?? Not in use yet
    goBack(): void {
        this._location.back();
    }
}