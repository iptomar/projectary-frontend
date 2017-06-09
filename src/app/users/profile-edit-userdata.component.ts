import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { StudentService } from './users.service';
import { IStudent } from './users';
import 'rxjs/add/operator/switchMap';
import { ILogin } from "app/menu/login/login";
import { API } from '../../main';

@Component({
    templateUrl: "./profile-edit-userdata.component.html"
})

export class ProfileEditDataComponent implements OnInit {
    user: IStudent;
    apiURL = API.url;

    constructor(
        private _service: StudentService,   
        private _route: ActivatedRoute,
        private location: Location
    ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        this._route.params
            .switchMap((params: Params) => this._service.getStudent(parseInt(user_data.user_id)))
            .subscribe(
                student => {
                    this.user = student;
                }, error => console.log("Impossível carregar perfil do estudante ")
            );
    }

    cancel() {
        this.location.back();
    }
}