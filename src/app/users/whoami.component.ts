import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { IProject } from "../projects/project";
import { StudentService } from './users.service';
import { IStudent } from './users';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: "whoami",
    templateUrl: "./whoami.component.html",
    providers: [StudentService]
})

export class WhoAmIComponent implements OnInit {

    // Attributes that will be used on views
    title = 'Perfil';
    student: IStudent;

    constructor(
        private _service: StudentService,   //
        private _route: ActivatedRoute
    ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._route.params
            .switchMap((params: Params) => this._service.getStudent(JSON.parse(localStorage.getItem('currentUser')).user_id))
            .subscribe(
            student => {
                this.student = student;
            },
            error => console.log("Impossível carregar perfil do estudante ")
            );
    }
}