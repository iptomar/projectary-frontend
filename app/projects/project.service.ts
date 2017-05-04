// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";


import { IProject } from "./project";
import { ILogin } from "../menu/login/login";
import { API } from '../main';

@Injectable()
export class ProjectService {

    constructor(private _http: Http){}
    apiURL = API.url;

    getProjects(): Observable<IProject[]>{
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password)); 
        
        return this._http.get(this.apiURL+'/project', {headers: headers})
            .map((response: Response) => <IProject[]> response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: Response){
        return Observable.throw(error.json().error || "Server error");
    }

}