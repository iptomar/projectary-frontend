// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Student } from './users';

@Injectable()
export class StudentService {

    private _student_url = 'student/:id';  // URL to web api
    //private _student_list_url = 'students';  // URL to web api

    private _student_list_url = 'app/profiles/students.json';

    constructor(private _http: Http) { }

    getStudent(id: number): Observable<Student> {
        return this._http.get(this._student_url, id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getStudents(): Observable<Student[]> {
        return this._http.get(this._student_list_url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}