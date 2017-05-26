import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

import { GroupService } from './group.service';
import { IGroup, IGroupProfile } from "./group";

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: "app/groups/group-profile.component.html"
})

export class GroupProfileComponent implements OnInit {

    // Attributes that will be used on views
    title = "Perfil do Grupo";
    group: IGroupProfile;
    newName: String;

    constructor(
        private _service: GroupService,
        private _route: ActivatedRoute, 
        private router: Router
    ) { }

    // Method that is called on initialization of the page
    ngOnInit(): void {
        this._route.params
            .switchMap((params: Params) => this._service.getGroup(params['id']))
            .subscribe(
                group => this.group = group,
                error => console.log("Impossível carregar perfil do grupo ")
            );
    }

    edit(): void{
        if(this.newName!=null){
            this._service
                .updateGroup(this.group.id, this.newName)
                .subscribe( success => {let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-success">Grupo <strong>alterado</strong> com sucesso</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                    this.router.navigate(['/group/list']); },
                error => {
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger"><strong>Erro</strong> na alteração do grupo</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                },          
                () => console.log("Finished") );
        }
    }

    remove(): void{
        this._service
            .removeGroup(this.group.id)
            .subscribe( success => {let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-success">Grupo <strong>removido</strong> com sucesso</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                    this.router.navigate(['/group/list']); },
                error => {
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger"><strong>Erro</strong> na remoção do grupo</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                },          
                () => console.log("Finished") );
        }
    }