import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { ILogin } from "../menu/login/login";

@Injectable()
export class GroupService {

    constructor(private _http: Http) { }

    postGroupCreation(name: string, pass: string): Observable<boolean>{
        // create the json to post
        var json = JSON.stringify({
            desc: name,
            password: pass
        });
        console.log(json);
        // define the authenticated user to identify the post 
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password)); 
        // return the post 
        return this._http.post('192.168.1.180:8080/group/create', json, { headers: headers })
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    postGroupJoin(name: string, pass: string): Observable<boolean>{
        // create the json to post
        var json = JSON.stringify({
            desc: name,
            password: pass
        });
        console.log(json);
        // define the authenticated user to identify the post 
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password)); 
        // return the post 
        return this._http.post('192.168.1.180:8080/group/join', json, { headers: headers })
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}