import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { Headers } from "@angular/http";
import { ProjectFormComponent } from "./project-form.component";

@Injectable()
export class ProjectFormService {



    constructor(private _http: Http) {

    }

    getCurrentTime() {
        return this._http.get('http://date.jsontest.com')
            .map(res => res.json());
    }

    postJSON() {
        //var json = JSON.stringify({ var1: 'teste', var2: 3 });
        var json = JSON.stringify({ var1: "teste", var2: 3 });
        var params = 'json=' + json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://validate.jsontest.com', params, { headers: headers })
            .map(res => res.json());
    }

    /*submit(objetivos: string,
        nAlunos: string,
        titulo: string,
        escola: string,
        curso: string,
        orientadores: string,
        requesitos: string): void {

    }*/

}