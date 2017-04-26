import { Component, Pipe, PipeTransform, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { ILogin } from "./login";


@Component({
  selector: "login",
  templateUrl: "app/menu/login/login.component.html",
  providers: [LoginService]
})


export class LoginComponent implements OnInit {

  private username: string;
  private password: string;
  private loading = false;
  private error = false;
  private autenticated = false;
  constructor(private _httpService: LoginService) { }

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
        console.log(localStorage.getItem('currentUser'));
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
  }

}

