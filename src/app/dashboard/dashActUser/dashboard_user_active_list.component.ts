import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { IStudent } from '../../users/users';
import { DashboardService } from "../dashboard.service";
import { Router } from "@angular/router";


@Component({
	templateUrl:"./dashboard_user_active_list.component.html",
    styleUrls:["./dashboard_user_active_list.component.css"]
})

export class DashboardListUserActiveComponent{
    title = "Dashboard";
    
    // Attributes that will be used on views
    students: IStudent[];
    errorMessage: string;
    searchFilter: string;
    putData: string;
    student: IStudent;
    constructor( private _service: DashboardService, private router: Router ) { }
    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._service.getPendingStudents().subscribe(
            students => this.students = students , 
            error =>  console.log("Impossível carregar lista de estudantes")
        );
    }
     onClick(id:number) {
        this.onActivePut(id.toString());
        this.ngOnInit();
    }
    onActivePut(ids:string) {
        this._service.putActiveJSON(ids,this.student)
            .subscribe(
                data => this.putData = data,
                error =>{
                    var erro = JSON.parse(error._body);
                    var message = JSON.stringify(erro.message);
                    //console.log(error);
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger"><strong>'+message+'</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                },
                () => {
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-success">Conta <strong>ativada</strong> com sucesso</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                    //this.router.navigate(['dash']);
                }
            );
    }   
}