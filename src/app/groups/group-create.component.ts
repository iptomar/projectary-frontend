import { Component, Input } from "@angular/core";
import { GroupService } from "./group.service";
import { Router } from "@angular/router";


@Component({
    templateUrl: "./group-create.component.html",
    providers: [GroupService]
})

export class GroupCreateComponent{

    // Attributes that will be used on views
    private name: string;
    private password: string;
    title = 'Criar Grupo';

    constructor( private _service: GroupService, private router: Router ) { }

    create(){
        this._service
            .postGroup(this.name, this.password)
            .subscribe( 
                success => {let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-success">Grupo <strong>criado</strong> com sucesso</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                    var data = JSON.parse(localStorage.getItem('currentUser'));
                    data.group_id = success.data.id;
                    data.group_name = this.name;   
                    localStorage.setItem('currentUser', JSON.stringify(data));
                    console.log(JSON.parse(localStorage.getItem('currentUser')));

                    this.router.navigate(['home']); },
                error => {
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger"><strong>Erro</strong> na criação do grupo</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                },          
                () => console.log("Finished") );
    }
}