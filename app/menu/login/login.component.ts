import { Component, Pipe, PipeTransform, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { ILogin } from "./login";


@Component({
  selector: "login",
  templateUrl: "app/menu/login/login.component.html",
  providers: [LoginService]
})


export class LoginComponent implements OnInit {

  login: ILogin;
  username: string;
  password: string;
  error: Boolean;

  constructor(private _httpService: LoginService) { }

  getLogin() {
    this._httpService.login(this.username, this.password).subscribe(
      login => this.login = login,
      error => this.error = true,
      () => console.log(this.login)
    );
  }

  ngOnInit() {
    this.error = false;
  }



}

