import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Student } from './users';

@Injectable()
export class StudentProfileService {

    private _student_url = 'student/:id';  // URL to web api

    constructor(private http: Http) { }

    getStudent(): Promise<Student> {
        return this.http.get(this._student_url)
                .toPromise()
                .then(response => response.json().data as Student)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
}