import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService } from './project.service';
import { IProject } from './project';
import { IGroupProfile } from '../groups/group';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: "./project-detail.component.html"
})

export class ProjectComponent implements OnInit {

    // Attributes that will be used on views
    title = 'Perfil de um projeto por atribuir';
    project: IProject;
    owner: String;
    course: String;
    group: IGroupProfile;

    constructor(
        private _service: ProjectService,
        private _route: ActivatedRoute,
        private router: Router
    ) { }

    // Method that is called on initialization of the page
    async ngOnInit() {
        console.log("vai pedir o serviço getProject ");
        let id = +this._route.snapshot.params['id'];
        this.project = await this._service.getProject(id);
        console.log(this.project)
        if (this.project.groupid != null) {
            console.log("vai pedir o serviço getCourse");
            this._service.getGroup(this.project.groupid)
                .subscribe(group => this.group = group);
        }else{
            console.log("Não está atribuído ainda");
            this.group.name="Não Atribuído";
        } 
    }
}