import { Component } from "@angular/core";

@Component({
	 template: `
    <h1 style="color:#800">{{title}}</h1>
    <p  style="color:#800">{{saudacao}}</p>
    <hr>
  `
})

export class NotFoundComponent{
  title = '404';
  saudacao = 'Página Não encontrada!'
}