import { Component, Input } from "@angular/core";
import { GroupService } from "./group.service";


@Component({
    templateUrl: "app/groups/group-create.component.html",
    providers: [GroupService]
})

export class GroupCreateComponent{

    // Attributes that will be used on views
    private name: string;
    private password: string;
    title = 'Criar Grupo';

    constructor( private _service: GroupService ) { }

    create(){
        this._service
            .postGroup(this.name, this.password)
            .subscribe( error =>  console.log("Impossível criar grupo") );
    }
}