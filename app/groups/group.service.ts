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

    postGroup(name: string, password: string): Observable<boolean>{
        
        var json = JSON.stringify({
            name: name 
            password: password
        });

        console.log(json);
        var params = 'json=' + json;

        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password)); 

        return this._http.post('192.168.1.180:8080', params, { headers: headers })
            .map(res => res.json());
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}