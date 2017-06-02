import { Component, OnInit, Input, ElementRef, ViewChild, Renderer } from "@angular/core";

import { ApplicationService } from "./application.service";
import { ModalComponent } from "../utils/modal.component";
import { Group, IGroup } from "../groups/group";
import { IApplication } from "app/applications/application";

@Component({
	templateUrl: "./application-list.component.html"
})
 
export class ApplicationListComponent implements OnInit{

    applications: IApplication[];
    title = 'As minhas Candidaturas';
    error: boolean=false;
    errorMessage: string;

    constructor(private _applicationService : ApplicationService){
    }

    ngOnInit(): void { 
        this._applicationService.getUserApplications()
            .subscribe(applications => this.applications = applications,
                    error => this.errorMessage = <any> error);
    }
    
}
 