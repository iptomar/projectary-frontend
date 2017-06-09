import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { DashboardService } from '../dashboard.service';
import { IProjectApplication } from '../form';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: "./dashboard_project_profile.component.html",
    styleUrls: ["./dashboard_project.component.css"]
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
        private _route: ActivatedRoute,
        private router: Router
    ) { }

    // Method that is called on initialization of the page
    async ngOnInit() {
        let id = +this._route.snapshot.params['id'];
        this.project = await this._service.getProject(id);
        console.log(this.project);
        this._service.getCourse(this.project.courseid)
            .subscribe(course => this.course = course);
        this._service.getOwner(this.project.userid)
            .subscribe(owner => this.owner = owner);
    }

    onSelectionChange(id: number) {
        console.log("groupIdToAssign=" + id)
        console.log("projectId=" + this.project.id)
        this.groupIdToAssign = id;
    }

    assigns(): void {
        this._service
            .postAcceptGroup(this.groupIdToAssign, this.project.id)
            .subscribe(success => { },
            error => {
                let myContainer = <HTMLElement>document.querySelector("#notif");
                myContainer.innerHTML = '<div class="alert alert-danger"><strong>Erro</strong> na atribuição do Projeto</div></div>';
                setTimeout(() => { myContainer.innerHTML = '' }, 3000)
            }, () => {
                let myContainer = <HTMLElement>document.querySelector("#notif");
                myContainer.innerHTML = '<div class="alert alert-success">Projeto <strong>Atribuido</strong> com Sucesso</div>';
                setTimeout(() => { myContainer.innerHTML = '' }, 3000)
                this.router.navigate(['dashboardprojects']);
            });
    }
}