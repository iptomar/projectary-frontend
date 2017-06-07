// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ILogin } from "../menu/login/login";
import { API } from '../../main';

@Injectable()
export class RecoveryService {

    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) { 

    }
    apiURL = API.url;
    
    postRecJSON(user: string) {
        return this._http.post(this.apiURL+'/user/'+user+'/recover', this.options)
            .map(res => res.json());
    }
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}