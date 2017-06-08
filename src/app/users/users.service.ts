// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudent } from './users';
import { ILogin } from "../menu/login/login";
import { API } from '../../main';

@Injectable()
export class StudentService {

    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) { 
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password));
        this.options = new RequestOptions({ headers: this.headers });
    }
    apiURL = API.url;



    postPhoto (postData: any, files: File[]) {

        let headers = new Headers();
        let formData:FormData = new FormData();
        formData.append('files', files[0], files[0].name);

        if(postData !=="" && postData !== undefined && postData !==null){
        for (var property in postData) {
            if (postData.hasOwnProperty(property)) {
                formData.append(property, postData[property]);
            }
        }
        }
        var returnReponse = new Promise((resolve, reject) => {
        this._http.post(this.apiURL+'/photo', formData, {
            headers: headers
        }).subscribe(
            res => {
                // this.responseData = res.json();
                // resolve(this.responseData);
            },
            error => {
                //reject(error);
            }
        );
        });
        return returnReponse;
    }
    getPhoto(id: number) {
        return this._http
            .get(this.apiURL+`/photo/${id}`, this.options)
            .map((res: Response) => res.json().data)
            .catch(this.handleError);
    }
    getStudent(id: number): Observable<IStudent> {
        return this._http
            .get(this.apiURL+`/user/${id}`, this.options)
            .map((res: Response) => res.json().data)
            .catch(this.handleError);
    }

    getStudents(): Observable<IStudent[]> {
        return this._http
            .get(this.apiURL+'/user', this.options)
            .map((response: Response) =><IStudent[]> response.json().data )
            .catch(this.handleError);
    }
    
    putChPassJSON(data: string) {
        return this._http.put(this.apiURL+'/user/chpassword', JSON.stringify({"password":data}), this.options)
            .map(res => res.json());
    }
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}