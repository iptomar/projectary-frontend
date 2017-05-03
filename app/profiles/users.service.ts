// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudent } from './users';
import { ILogin } from "../menu/login/login";

@Injectable()
export class StudentService {

    constructor(private _http: Http) { }

    getStudent(id: number): Observable<IStudent> {
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password)); 
        return this._http.get('http://192.168.1.191:8080/user/:id', {headers: headers})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getStudents(): Observable<IStudent[]> {
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password)); 
  
        return this._http.get('http://192.168.1.191:8080/user', {headers: headers}).map(
            (response: Response) =><IStudent[]> response.json().data )
            .catch((error: any) => Observable.throw('Server error'));
    }
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}