import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { Headers } from "@angular/http";
import { ProjectFormComponent } from "./project-form.component";
import { IProject } from "./form";
import { ISchool } from "./schools";
import { ILogin } from "../../menu/login/login";


@Injectable()
export class ProjectFormService {

    constructor(private _http: Http) {

    }

    getSchool(): Observable<ISchool[]> {
        return this._http.get('app/projects/project-form/form.json')
            .map((res: Response) => <ISchool[]> res.json());
    }

    postJSON(data: IProject) {

        console.log(data);
        let user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", "Basic " + btoa(user_data.username + ":" + user_data.password)); 
        return this._http.post('192.168.1.176:8080/project', data, { headers: headers })
            .map(res => res.json());
    }

}