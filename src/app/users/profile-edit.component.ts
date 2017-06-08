import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FileUploader } from 'ng2-file-upload';

import { StudentService } from './users.service';
import { IStudent } from './users';
import 'rxjs/add/operator/switchMap';
import { ILogin } from "app/menu/login/login";
import { API } from '../../main';

@Component({
    templateUrl: "./profile-edit.component.html",
    styleUrls: ["./profile-edit.component.css"],
    providers: [StudentService]
})

export class UserProfileEditComponent implements OnInit {
    title = 'Editar Perfil';
    student: IStudent;
    public uploader:FileUploader;
    apiURL = API.url;

    constructor(
        private _service: StudentService,   
        private _route: ActivatedRoute
    ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        this.uploader = new FileUploader({url: this.apiURL+'/photo/'});
        this.uploader.authToken = "Basic " + btoa(user_data.username + ":" + user_data.password);        
        
        // this._route.params
        //     .switchMap((params: Params) => this._service.getStudent(parseInt(user_data.user_id)))
        //     .subscribe(
        //     student => {
        //         this.student = student;
        //     },
        //     error => console.log("Impossível carregar perfil do estudante ")
        //     );
    }

}