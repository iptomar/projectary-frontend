import { Component, OnInit } from "@angular/core";
import { GroupService } from './group.service';

import 'rxjs/add/operator/switchMap';
import { IGroup } from './group';

@Component({
    templateUrl: "app/groups/group-list.component.html",
    providers: [GroupService]
})

export class GroupListComponent implements OnInit {
    // Attributes that will be used on views
    groups: IGroup[];
    errorMessage: string;
    searchFilter: string;
    title = 'Lista de Grupos';
    
    constructor( private _service: GroupService ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._service.listGroups().subscribe(
                groups => this.groups = groups , 
                error => console.log("Impossível carregar lista de grupos" )
            );
    }   
}