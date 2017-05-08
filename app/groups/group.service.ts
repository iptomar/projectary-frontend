import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { ILogin } from "../menu/login/login";
import { API } from '../main';
import { IGroup, IGroupProfile } from './group';

@Injectable()
export class GroupService {

    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) { 
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password));
        this.options = new RequestOptions({ headers: this.headers });
    }
    apiURL = API.url;

    postGroup(name: string, pass: string): Observable<any>{
        // create the json to post
        var json = JSON.stringify({
            desc: name,
            password: pass
        });
        console.log(json);

        // return the post 
        return this._http
            .post(this.apiURL+'/group/', json, this.options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    listGroups(): Observable<IGroup[]> { 
        return this._http
            .get(this.apiURL+'/group/', this.options)
            .map((response: Response) => <IGroup[]> response.json().data )
            .catch(this.handleError);
    }

    getGroup(id: number): Observable<IGroupProfile> {
        return this._http
            .get(this.apiURL+`/group/${id}`, this.options)
            .map((res: Response) => <IGroupProfile> res.json())
            .catch(this.handleError);
    }

    updateGroup(id: number, name: String){
        return this._http
            .put(this.apiURL+`/group/${id}`, JSON.stringify(name), this.options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    removeGroup(id: number){
        return this._http
            .delete(this.apiURL+`/group/${id}`, this.options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}