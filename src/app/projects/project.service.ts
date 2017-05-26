// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { IProject } from "./project";
import { ILogin } from "../menu/login/login";
import { API } from '../../main';
import { IGroup } from "../groups/group";

@Injectable()
export class ProjectService {

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


    getProjects(): Observable<IProject[]>{
        return this._http.get(this.apiURL+'/project', this.options)
            .map((response: Response) => <IProject[]> response.json().data)
            .catch(this.handleError);
    }


    getUserGroups(): Observable<IGroup[]> {
        return this._http.get(this.apiURL+`/group/user/${this.userID}`, this.options)
            .map((res: Response) => <IGroup[]> res.json().data);
    }

    postApplication(project_id: number, group_id: number) {
        return this._http.post(this.apiURL+'/application', JSON.stringify({"projectid":project_id,"groupid":group_id}), this.options)
            .map(res => res.json());
    }
    
    private handleError(error: Response){
        return Observable.throw(error.json().error || "Server error");
    }
}