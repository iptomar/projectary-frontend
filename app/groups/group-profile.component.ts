import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';

import { GroupService } from './group.service';
import { IGroup, IGroupProfile } from "./group";

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: "app/groups/group-profile.component.html",
    providers: [GroupService]
})

export class GroupProfileComponent implements OnInit {

    // Attributes that will be used on views
    title = 'Perfil do Grupo';
    group: IGroupProfile;

    constructor(
        private _service: GroupService,
        private _route: ActivatedRoute
    ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._route.params
            .switchMap((params: Params) => this._service.getGroup(+params['id']))
            .subscribe(
                group => this.group = group,
                error => console.log("Impossível carregar perfil do grupo ")
            );
    }

    edit(): void{
        this._service
            .updateGroup(this.group.id, this.group.name)
            .subscribe( error => console.log("Impossível editar grupo "+this.group.id ));
    }

    remove(): void{
        this._service
            .removeGroup(this.group.id)
            .subscribe( error => console.log("Impossível remover grupo "+this.group.id ));
    }
}