// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { ILogin } from "../menu/login/login";
import { API } from '../../main';
import { IApplication } from "app/applications/application";

@Injectable()
export class ApplicationService {

    headers: Headers;
    options: RequestOptions;
    apiURL = API.url;
    userID: number;

    constructor(private _http: Http) {
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        this.userID = parseInt(user_data.user_id);
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password));
        this.options = new RequestOptions({ headers: this.headers });
    }

    getUserApplications(): Observable<IApplication[]> {
        return this._http.get(this.apiURL+`/application/${this.userID}`, this.options)
            .map((res: Response) => <IApplication[]> res.json().data);
    }
    
    private handleError(error: Response){
        return Observable.throw(error.json().error || "Server error");
    }
}