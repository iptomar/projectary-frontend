import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { IProject } from "../projects/project";

@Component({
  templateUrl: "./home.component.html"
})

export class HomeComponent{
    title = 'Projectary';
    saudacao = 'Bem vindo à Base de Dados de Projetos Finais'

    public projects: IProject[];

    constructor(
        private _service: HomeService,
        private _route: ActivatedRoute
    ) { }

    async ngOnInit() {
        this.projects = await this._service.getProjects();
        console.log(this.projects)
        var count = this.projects.length;
        if (count > 0) {
            var assigned = this.projects.filter(x => x.approvedin != null).length;
            var notAssigned = count - assigned;
            this.DonutChart(assigned, notAssigned, count);
        } else {
            this.NotProject();
        }
    }

    DonutChart(assigned:number, notAssigned:number, count:number) {
        var container = document.getElementById("canvasContainer");
        var canvas : any = document.getElementById("canvas");
        canvas.setAttribute("width", ""+container.offsetWidth);
        canvas.setAttribute("height", ""+container.offsetHeight);
        var ctx : CanvasRenderingContext2D = canvas.getContext("2d");
        var xC = canvas.offsetWidth / 2;
        var yC = (canvas.offsetHeight - 80) / 2;
        var xR = 40;
        var yR = canvas.offsetHeight - 40;
        var r = (xC > yC) ? yC - 30 : xC - 30;

        var i, fill = [], pointer = 0;
        var values = [
            { color: "#B22222", percent: Math.round(assigned * 100) / count,     name: "Projetos Atribuídos" },
            { color: "#1E90FF", percent: Math.round(notAssigned * 100) / count,  name: "Projetos Não Atribuídos" }
        ];
        var slowness = 2;
        var fillRate = (2 * Math.PI) / (slowness * 100);
        for (i = 0; i < (slowness * 100); i++) {
            if (i < (values[0].percent * slowness)) {
                fill.push({ color: values[0].color });
            }
            else {
                fill.push({ color: values[1].color });
            }
        }
        for (i = 0; i < values.length; i++) {
            ctx.lineWidth = 1;
            ctx.fillStyle = values[i].color;
            ctx.fillRect(xR, yR, 10, 10);
            ctx.stroke();
            ctx.fillStyle = "#000000";
            ctx.font = "14px Arial";
            ctx.fillText(Math.round(values[i].percent) + "%", xR - 30, yR + 10);
            ctx.fillText(values[i].name, xR + 15, yR + 10);
            yR += 17;
        }
        i = 0;
        var interval = setInterval(function () {
            if (i < fill.length) {
                ctx.lineWidth = 50;
                ctx.strokeStyle = fill[i].color;
                ctx.beginPath();
                ctx.arc(xC, yC, r, pointer, pointer + fillRate);
                ctx.stroke();
                pointer += fillRate;
                i++;
            }
            else {
                clearInterval(interval);
            }
        }, 4);
    }

    NotProject(){
        var container = document.getElementById("canvasContainer");
        var canvas : any = document.getElementById("canvas");
        canvas.setAttribute("width", ""+container.offsetWidth);
        canvas.setAttribute("height", ""+container.offsetHeight);
        var ctx : CanvasRenderingContext2D = canvas.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText("Não existem", 10, 40);
        ctx.fillText("Projetos", 32, 90);
        ctx.fillText("no sistema", 20, 140);
    }

}
