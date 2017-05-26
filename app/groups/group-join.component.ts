import { Component, Input } from "@angular/core";
import { GroupService } from "./group.service";
import { Router } from "@angular/router";


@Component({
    templateUrl: "app/groups/group-join.component.html",
    providers: [GroupService]
})

export class GroupJoinComponent{

    // Attributes that will be used on views
    private name: string;
    private password: string;
    title = 'Juntar a Grupo';

    constructor(private _service: GroupService, private router: Router) { }

    join(){
        this._service
            .joinGroup(this.name, this.password)
            .subscribe( 
                success => {let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-success"><strong>Juntou-se</strong> ao grupo com sucesso</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                    this.router.navigate(['home']); },
                error => {
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger"><strong>Erro</strong> ao juntar-se do grupo</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                },          
                () => console.log("Finished") );
        }
    }