import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

import { GroupService } from './group.service';
import { IGroup, IGroupProfile } from "./group";

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: "app/groups/group-profile.component.html"
})

export class GroupProfileComponent implements OnInit {

    // Attributes that will be used on views
    title = "Perfil do Grupo";
    group: IGroupProfile;
    newName: String;

    constructor(
        private _service: GroupService,
        private _route: ActivatedRoute, 
        private router: Router
    ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._route.params
            .switchMap((params: Params) => this._service.getGroup(params['id']))
            .subscribe(
                group => this.group = group,
                error => console.log("Impossível carregar perfil do grupo ")
            );
    }

    edit(): void{
        if(this.newName!=null){
            this._service
                .updateGroup(this.group.id, this.newName)
                .subscribe( success => {console.log("Editado com sucesso.");this.router.navigate(['/group/list']);} );
        }
    }

    remove(): void{
        this._service
            .removeGroup(this.group.id)
            .subscribe( success => {console.log("Removido com sucesso."); this.router.navigate(['/group/list']); });
    }
}