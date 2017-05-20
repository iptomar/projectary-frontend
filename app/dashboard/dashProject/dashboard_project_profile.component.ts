import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { DashboardService } from '../dashboard.service';
import { IProjectApplication } from '../form';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: "app/dashboard/dashProject/dashboard_project_profile.component.html",
    styleUrls:["app/dashboard/dashProject/dashboard_project.component.css"]
})

export class DashboardProjectProfileComponent implements OnInit {

    // Attributes that will be used on views
    title = 'Perfil de um projeto por atribuir';
    project: IProjectApplication;
    // https://juristr.com/blog/2016/11/ng2-binding-radiobutton-lists/  - help
    groupIdToAssign: number;

    constructor(
        private _service: DashboardService,
        private _route: ActivatedRoute
    ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._route.params
            .switchMap((params: Params) => this._service.getProject(+params['id']))
            .subscribe(
            project => this.project = project,
            error => console.log("Impossível carregar perfil do projeto")
            );
        this.project.description = this.project.description.substring(0, 100);
    }

    onSelectionChange(id:number){
        this.groupIdToAssign=id;
    }

    assigns(): void {
        this._service
            .postAcceptGroup(this.groupIdToAssign, this.project.id)
            .subscribe(error => console.log("Não foi possível aceitar o grupo " + this.groupIdToAssign));
    }
}