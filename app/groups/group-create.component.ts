import { Component, Input } from "@angular/core";
import { GroupService } from "./group.service";
import { Router } from "@angular/router";


@Component({
    templateUrl: "app/groups/group-create.component.html",
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
            .subscribe( success =>  console.log("Grupo criado com sucesso.") );
            let myContainer = <HTMLElement> document.querySelector("#notif");
            myContainer.innerHTML = '<div class="alert alert-success">Criação de <strong>Grupo</strong> Efectuado com Sucesso</div>';
            setTimeout(() => { myContainer.innerHTML = ''}, 3000)
            this.router.navigate(['home']);
    }
}