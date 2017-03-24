import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  organizacao = 'IPT';
  title = 'Projectos Finais';
  saudacao = 'Bem vindo à Base de Dados de Projectos Finais'
  fim='DevPSI'
  today: number = Date.now();
}
