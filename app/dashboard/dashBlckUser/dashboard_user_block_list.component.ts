import { Component, OnInit } from "@angular/core";
import { IStudent } from '../../users/users';
import { DashboardService } from "../dashboard.service";

@Component({
    moduleId: module.id,
	templateUrl:"./dashboard_user_block_list.component.html",
    styleUrls:["./dashboard_user_block_list.component.css"]
})

export class DashboardListUserBlockComponent{
    title = "Dashboard";
    
    // Attributes that will be used on views
    students: IStudent[];
    errorMessage: string;
    searchFilter: string;
    putData: string;
    student: IStudent;

    constructor( private _service: DashboardService) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._service.getStudents().subscribe(
            students => this.students = students , 
            error =>  console.log("Impossível carregar lista de estudantes")
        );
    }

     onClick(id:number) {
        this.onBlockPut(id.toString());
        this.ngOnInit();
    }
    onBlockPut(ids:string) {
        this._service.putBlockJSON(ids,this.student)
            .subscribe(
                data => this.putData = data,
                error =>{
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger"><strong>Erro</strong> no bloqueio do utilizador</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                },
                () => console.log("Finished")
            );
    }   
}