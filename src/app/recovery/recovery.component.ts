import {Component} from "@angular/core";
import {RecoveryService} from "./recovery.service";
@Component({
  templateUrl: "./recovery.component.html"
})
export class RecoveryComponent{
    title = 'Recuperação de Password';

    constructor( private _serviceRecovery: RecoveryService ) { }

    onRecPost(email:string) {

        this._serviceRecovery.postRecJSON(email)
            .subscribe(
                data => {let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-success">Pedido de nova Password <strong>Envidada</strong> com Sucesso</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                    window.location.reload(); },
                error => {
                    let myContainer = <HTMLElement> document.querySelector("#notif");
                    myContainer.innerHTML = '<div class="alert alert-danger"><strong>Erro</strong> no envio de password</div>';
                    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
                },          
                () => console.log("Finished")
            );
    }
}