import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { DashboardService } from '../dashboard.service';
import { IProjectApplication } from '../form';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: "app/dashboard/dashProject/dashboard_project_profile.component.html",
    providers: [DashboardService]
})

export class DashboardProjectProfileComponent implements OnInit {

    // Attributes that will be used on views
    title = 'Perfil de um projeto por atribuir';
    project: IProjectApplication;

    constructor(
        private _service: DashboardService,   //
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
    }

    accept(groupID: number): void {
        this._service
            .postAcceptGroup(groupID, this.project.id)
            .subscribe(error => console.log("Não foi possível aceitar o grupo " + groupID));
    }
}