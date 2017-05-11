import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { IProject } from "./form";
import { ISchool, ICourse } from "../../schools/schools";
import { ILogin } from "../../menu/login/login";
import { API } from '../../main';


@Injectable()
export class ProjectFormService {

    constructor(private _http: Http) {

    }
    apiURL = API.url;

   getSchool(): Observable<ISchool[]>{
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password)); 
        
        return this._http.get(this.apiURL+'/school', {headers: headers})
            .map((response: Response) => <ISchool[]> response.json().data)
            .catch(this.handleError);
    }
    getCourse(): Observable<ICourse[]>{
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password)); 
        
        return this._http.get(this.apiURL+'/course/1', {headers: headers})
            .map((response: Response) => <ICourse[]> response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: Response){
        return Observable.throw(error.json().error || "Server error");
    }

    postJSON(data: IProject) {
        console.log(data);
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password));
        return this._http.post(this.apiURL+'/project', JSON.stringify(data), { headers: headers })
            .map(res => res.json());
    }

}