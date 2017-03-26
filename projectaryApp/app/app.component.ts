import { Component } from "@angular/core";

@Component({
	selector: "my-app",
	templateUrl: "app/app.component.html"
})

export class AppComponent{
  organizacao = 'IPT';
  title = 'Projectos Finais';
  saudacao = 'Bem vindo à Base de Dados de Projectos Finais'
  fim='DevPSI'
  today: number = Date.now();
}