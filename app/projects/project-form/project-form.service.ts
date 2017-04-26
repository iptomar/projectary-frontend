import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { Headers } from "@angular/http";
import { ProjectFormComponent } from "./project-form.component";
import { createProject } from "./form";
import { ISchool } from "./schools";


@Injectable()
export class ProjectFormService {

    project : createProject;

    constructor(private _http: Http) {

    }

    getSchool(): Observable<ISchool[]> {
        return this._http.get('app/projects/project-form/form.json')
            .map((res: Response) => <ISchool[]> res.json());
    }

    postJSON() {
        this.submit(this.project);
        var json = JSON.stringify({
            escola: this.project.escola,
            curso: this.project.curso,
            titulo: this.project.titulo,
            nAlunos: this.project.nAlunos,
            objetivos: this.project.objetivos,
            requesitos: this.project.requesitos,
            orientadores: this.project.orientadores
        });
        console.log(json);
        var params = 'json=' + json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('192.168.1.180:8080', params, { headers: headers })
            .map(res => res.json());
    }

    submit(project: createProject) {
        return this.project = project;
    }

}