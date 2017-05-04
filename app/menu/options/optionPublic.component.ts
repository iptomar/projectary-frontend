import { Component, OnInit } from "@angular/core";
import { ILogin } from "../login/login";

@Component({
	selector: "option-public",
    templateUrl: "app/menu/options/optionPublic.component.html"
})

export class OptionPublicComponent implements OnInit {
        role: string;

        ngOnInit(): void {
            // var user_data = JSON.parse(localStorage.getItem('currentUser'));
            // if(user_data != null){
            //     this.role = user_data.role;
            // }
            
        }


    
}