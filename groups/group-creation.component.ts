import { Component, Input, OnInit } from "@angular/core";
import { GroupService } from "./group.service";


@Component({
    templateUrl: "app/groups/group-creation.component.html",
    styleUrls: ["app/groups/group-creation.component.css"],
    providers: [GroupService]
})

export class GroupCreationComponent implements OnInit{
    title = 'Projetos';

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }


}