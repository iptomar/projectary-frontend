import { Component, Input } from "@angular/core";
import { GroupService } from "./group.service";


@Component({
    templateUrl: "app/groups/group-join.component.html",
    providers: [GroupService]
})

export class GroupJoinComponent{

    // Structure that will be used on views
    private error: boolean;
    private name: string;
    private pass: string;
    // 
    title = 'Juntar a Grupo';
    constructor(private _service: GroupService) { }

    join(){
        this._service.postGroupJoin(this.name, this.pass).subscribe(
            result => { this.error = false; },
            error => { this.error = true; }
        );
    }
}