import { Component, Input } from "@angular/core";
import { GroupService } from "./group.service";


@Component({
    templateUrl: "app/groups/group-creation.component.html",
    styleUrls: ["app/groups/group-creation.component.css"],
    providers: [GroupService]
})

export class GroupCreationComponent{

    // Structure that will be used on views
    private error: boolean;
    private name: string;
    private pass: string;
    // 
    title = 'Criar Grupo';
    constructor( private _service: GroupService ) { }

    creation(){
        this._service.postGroupCreation(this.name, this.pass).subscribe(
            result => { this.error = false; },
            error => { this.error = true; }
        );
    }
}