import { Component, Input } from "@angular/core";
import { GroupService } from "./group.service";
import { Router } from "@angular/router";


@Component({
    templateUrl: "./group-create.component.html",
    providers: [GroupService]
})

export class GroupCreateComponent {

    // Attributes that will be used on views
    title = 'Criar Grupo';

    constructor(private _httpService: GroupService, private router: Router) { }

    create(name: string, password: string) {
        this._httpService.postGroup(name, password).subscribe(
            success => {
                let myContainer = <HTMLElement>document.querySelector("#notif");
                myContainer.innerHTML = '<div class="alert alert-success">Grupo <strong>criado</strong> com sucesso</div>';
                setTimeout(() => { myContainer.innerHTML = '' }, 3000)
                var data = JSON.parse(localStorage.getItem('currentUser'));
                data.group_id = success.data.id;
                data.group_name = name;
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.router.navigate(['home']);
            },
            error => {
                let myContainer = <HTMLElement>document.querySelector("#notif");
                myContainer.innerHTML = '<div class="alert alert-danger">' + error + '</div>';
                setTimeout(() => { myContainer.innerHTML = '' }, 3000)
            }
        );
    }
}