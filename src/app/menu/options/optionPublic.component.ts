import { Component, OnInit, OnDestroy } from "@angular/core";
import { ILogin } from "../login/login";
import { LoginService } from "../login/login.service";
import { Subscription } from "rxjs/Subscription";

@Component({
	selector: "option-public",
    templateUrl: "./optionPublic.component.html"
})

export class OptionPublicComponent implements OnInit, OnDestroy {
        message: any;
        subscription: Subscription;
        role: string;

        constructor(private login: LoginService){}
        ngOnInit() {
            // this.subscription = this.login.roleChange
            // .subscribe(
            //     value => this.role = value,
            //     ()=> console.log("deu erro"),
            //     ()=> console.log("completou")
            // );
        }

        load(){
            this.role="";
            var user_data = JSON.parse(localStorage.getItem('currentUser'));
            if(user_data != null){
                this.role = user_data.role;
            }   
            // this.login.getRole();
        }
        ngOnDestroy() {
            // unsubscribe to ensure no memory leaks
            // this.subscription.unsubscribe();
        }
}