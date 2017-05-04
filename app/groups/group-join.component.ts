import { Component, Input } from "@angular/core";
import { GroupService } from "./group.service";


@Component({
    templateUrl: "app/groups/group-creation.component.html",
    styleUrls: ["app/groups/group-creation.component.css"],
    providers: [GroupService]
})

export class GroupJoinComponent{

    // Structure that will be used on views
    private error: boolean;
    private name: string;
    private pass: string;
    // 
    title = 'Lista de utilizadores';
    constructor(private _service: GroupService) { }

    join(){
        this._service.postGroupJoin(this.name, this.pass).subscribe(
            result => { this.error = false; },
            error => { this.error = true; }
        );
    }
}