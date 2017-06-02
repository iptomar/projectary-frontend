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
    title = 'Perfil do projeto';
    project: IProject;
    owner: String;
    course: String;
    group: IGroupProfile;
    isAttributed: boolean;

    constructor(
        private _service: ProjectService,
        private _route: ActivatedRoute,
        private router: Router
    ) { }

    // Method that is called on initialization of the page
    async ngOnInit() {
        let id = +this._route.snapshot.params['id'];
        this.project = await this._service.getProject(id);
        console.log(this.project)
        this._service.getCourse(this.project.courseid)
            .subscribe(course => this.course = course);
        this._service.getOwner(this.project.userid)
            .subscribe(owner => this.owner = owner);
        if (this.project.groupid != null) {
            this._service.getGroup(this.project.groupid)
                .subscribe(group => {
                    this.group = group
                    console.log(this.group)
                });
            this.isAttributed = true;
            
        } else {
            console.log("Não está atribuído ainda");
            this.isAttributed = false;
        }
    }
}