import { Component, Input } from "@angular/core";
import { GroupService } from "./group.service";


@Component({
    templateUrl: "app/groups/group-join.component.html",
    providers: [GroupService]
})

export class GroupJoinComponent{

    // Attributes that will be used on views
    private name: string;
    private password: string;
    title = 'Juntar a Grupo';

    constructor(private _service: GroupService) { }

    join(){
        this._service
            .joinGroup(this.name, this.password)
            .subscribe( error =>  console.log("Impossível juntar ao grupo") );
    }
}