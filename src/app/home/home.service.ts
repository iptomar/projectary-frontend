// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { IProject } from "../projects/project";
import { API } from '../../main';

@Injectable()
export class HomeService {

    headers: Headers;
    options: RequestOptions;
    apiURL = API.url;

    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({ headers: this.headers });
    }
    
    async getProjects(): Promise<IProject[]> {
        let res = await this._http
            .get(this.apiURL + '/project', this.options)
            .toPromise();
        return res.json().data as IProject[];
    }
}