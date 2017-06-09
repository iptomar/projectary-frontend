import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FileUploader } from 'ng2-file-upload';
import { API } from "main";
import { StudentService } from "app/users/users.service";
import { ILogin } from "app/menu/login/login";

@Component({
    selector: "change-image",
    templateUrl: "./profile-edit-image.component.html"
})

export class ProfileEditImageComponent implements OnInit {
    title = 'Editar Perfil';
    public uploader:FileUploader;
    apiURL = API.url;
    URL: string  = this.apiURL+'/photo';

    constructor(
        private _service: StudentService,   
        private _route: ActivatedRoute,
        private location: Location
    ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        this.uploader = new FileUploader({url: this.URL, itemAlias: 'photo'});
        this.uploader.authToken = "Basic " + btoa(user_data.username + ":" + user_data.password);            
    }

    cancel() {
        this.location.back();
    }
}