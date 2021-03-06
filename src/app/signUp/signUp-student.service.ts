import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { API } from '../../main';
import { ISchool, ICourse } from "../schools/schools";
import { ISignUpStudent } from "./signUp";

@Injectable()
export class SignUpStudentService {

    apiURL = API.url;

    constructor(private _http: Http) { }

    getSchool(): Observable<ISchool[]> {
        return this._http.get(this.apiURL + '/school')
            .map((response: Response) => <ISchool[]>response.json().data)
            .catch(this.handleError);
    }

    getCourse(id: string): Observable<ICourse[]> {
        return this._http.get(this.apiURL + '/course/' + id)
            .map((response: Response) => <ICourse[]>response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || "Server error");
    }

    postJSON(data: ISignUpStudent) {
        console.log(data);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.apiURL + '/user', JSON.stringify(data), { headers: headers })
            .map(res => res.json());
    }
}