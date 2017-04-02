import { Component } from "@angular/core";
import { IProject } from "../projects/project";

@Component({
	selector: "profile",
	templateUrl: "app/profiles/profile-detail.component.html"
})
 
export class ProfileComponent{
    name='Diogo kingofCookies';
    mail='kingofcookies@psi.ipt';
    course="lei";
    college='ipt';
    projects: IProject[];
    fim='DevPSI'
    today: number = Date.now();
}