import { Component } from "@angular/core";

@Component({
	selector: "project",
	templateUrl: "app/projects/project-detail.component.html"
})
 
export class ProjectComponent{
	title = 'Projectos';
    saudacao = 'Aqui Estão os projectos'
    fim='DevPSI'
    today: number = Date.now();
}
 
