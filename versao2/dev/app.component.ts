import {Component} from 'angular2/core';

@Component({
  selector: 'app-root',
  templateUrl: './dev/app.component.html',
  
  
})
export class AppComponent {
  organizacao = 'IPT';
  title = 'Projectos Finais';
  saudacao = 'Bem vindo à Base de Dados de Projectos Finais'
  fim='DevPSI'
  today: number = Date.now();
}