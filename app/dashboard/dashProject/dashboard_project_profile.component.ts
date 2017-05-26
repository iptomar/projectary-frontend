import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { DashboardService } from '../dashboard.service';
import { IProjectApplication } from '../form';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: "app/dashboard/dashProject/dashboard_project_profile.component.html",
    styleUrls: ["app/dashboard/dashProject/dashboard_project.component.css"]
})

export class DashboardProjectProfileComponent implements OnInit {

    // Attributes that will be used on views
    title = 'Perfil de um projeto por atribuir';
    project: IProjectApplication;
    // https://juristr.com/blog/2016/11/ng2-binding-radiobutton-lists/  - help
    groupIdToAssign: number;
    owner: String;
    course: String;

    constructor(
        private _service: DashboardService,
        private _route: ActivatedRoute
    ) { }

    // Method that is called on initialization of the page
    async ngOnInit() {
        console.log("vai pedir o serviço getProject")
        await this._route.params
            .switchMap((params: Params) => this._service.getProject(+params['id']))
            .subscribe(
            project => { this.project = project; console.log(project); },
            error => console.log("Impossível carregar perfil do projeto")
            );
        //this.project.description = this.project.description.substring(0, 100);
        console.log("vai pedir o serviço getCourse")
        await this._route.params
            .switchMap((params: Params) => this._service.getCourse(this.project.courseid))
            .subscribe(
            course => { this.course = course; console.log(course); },
            error => console.log("Impossivel carregar curso")
            );
        console.log("vai pedir o serviço getOwner")
        await this._route.params
            .switchMap((params: Params) => this._service.getOwner(this.project.userid))
            .subscribe(
            course => { this.course = course; console.log(course); },
            error => console.log("Impossivel carregar owner")
            );
    }

    onSelectionChange(id: number) {
        console.log("groupIdToAssign=" + id)
        console.log("projectId=" + this.project.id)
        this.groupIdToAssign = id;
    }

    assigns(): void {
        this._service
            .postAcceptGroup(this.groupIdToAssign, this.project.id)
            .subscribe(error => console.log("Não foi possível aceitar o grupo " + this.groupIdToAssign));
    }
}