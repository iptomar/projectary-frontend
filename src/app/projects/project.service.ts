// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { IProject, ProjectFinalize } from "./project";
import { ILogin } from "../menu/login/login";
import { API } from '../../main';
import { IGroupProfile } from '../groups/group';

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

    async getProject(id: number): Promise<IProject> {
        let res = await this._http
            .get(this.apiURL + `/project/${id}`, this.options)
            .toPromise();
        return res.json().data[0] as IProject;
    }

    getGroup(id:number): Observable<IGroupProfile>{
        return this._http
            .get(this.apiURL + `/group/${id}`, this.options)
            .map((response: Response) => <IGroupProfile>response.json().data)
            .catch(this.handleError);
    }
    
    async getGroupAsync(id: number): Promise<IGroupProfile> {
        let res = await this._http
            .get(this.apiURL + `/group/${id}`, this.options)
            .toPromise();
        return res.json().data as IGroupProfile;
    }

     getCourse(id:number): Observable<String>{
        return this._http
            .get(this.apiURL + `/course/${id}`, this.options)
            .map((response: Response) => <String>response.json().data[0].name)
            .catch(this.handleError);
    }

    getOwner(id:number): Observable<String>{
        return this._http
            .get(this.apiURL + `/user/${id}`, this.options)
            .map((response: Response) => <String>response.json().data.name)
            .catch(this.handleError);
    }

    postApplication(project_id: number, group_id: number) {
        return this._http.post(this.apiURL+'/application', JSON.stringify({"projectid":project_id,"groupid":group_id}), this.options)
            .map(res => res.json());
    }
    postProjectFinalize(data: ProjectFinalize) {
        return this._http.post(this.apiURL+'/project/finished', JSON.stringify(data), this.options)
            .map(res => res.json());
    }
    
    private handleError(error: Response){
        return Observable.throw(error.json().error || "Server error");
    }
}