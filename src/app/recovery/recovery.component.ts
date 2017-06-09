import {Component} from "@angular/core";
import { RecoveryService } from "./recovery.service";
import { Router } from "@angular/router";
@Component({
  templateUrl: "./recovery.component.html"
})
export class RecoveryComponent{
    title = 'Recuperação de Password';

    constructor( private _serviceRecovery: RecoveryService, 
        private router: Router ) { }

    onRecPost(email:string) {
        this._serviceRecovery.postRecJSON(email)
            .subscribe(
                data => {let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-success">O Pedido da nova Password será <strong>enviado</strong> para o email.</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                    this.router.navigate(['/home']);  },
                error => {
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger"><strong>Erro</strong> no envio do pedido.</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                });
    }
}