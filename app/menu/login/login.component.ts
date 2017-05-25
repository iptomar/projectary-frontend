import { Component, Pipe, PipeTransform, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { ILogin } from "./login";
import { Router } from "@angular/router";


@Component({
  selector: "login",
  templateUrl: "app/menu/login/login.component.html",
  styleUrls: ["app/menu/login/login.component.css"],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {

  private username: string;
  private password: string;
  private name: string;
  private isadmin: number;
  private loading = false;
  private error = false;
  private autenticated = false;

  constructor(private _httpService: LoginService, private router: Router) { }

  ngOnInit() {
    // reset login status
    this._httpService.logout();
    this.autenticated = false;
  }

  login() {
    this.loading = true;
    this._httpService.login(this.username, this.password).subscribe(
      result => {    
        this.error = false;
        this.autenticated = true;
        this.name =JSON.parse(localStorage.getItem('currentUser')).name;
        this.isadmin =JSON.parse(localStorage.getItem('currentUser')).isadmin;
        let myContainer = <HTMLElement> document.querySelector("#notif");
        myContainer.innerHTML = '<div class="alert alert-success"><strong>Login</strong> Efectuado com Sucesso</div>';
        setTimeout(() => { myContainer.innerHTML = ''}, 3000)
      },
      error => {
        this.error = true;
        this.loading = false;
        console.log("Dados incorrectos");
      }
    );
  }
  
  logout(){
    this._httpService.logout();
    this.autenticated = false;
    this.loading = false;
    let myContainer = <HTMLElement> document.querySelector("#notif");
    myContainer.innerHTML = '<div class="alert alert-warning"><strong>Logout</strong> Efectuado com Sucesso</div>';
    setTimeout(() => { myContainer.innerHTML = ''}, 3000)
    this.router.navigate(['home']);
  }

}

