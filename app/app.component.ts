import { Component } from "@angular/core";
import { LoginComponent} from "./login/login.component";

@Component({
	selector: "my-app",
	templateUrl: "app/app.component.html",
  styleUrls:["app/app.component.css"],
})

export class AppComponent{
  organizacao = 'IPT';
  fim='DevPSI'
  today: number = Date.now();
}