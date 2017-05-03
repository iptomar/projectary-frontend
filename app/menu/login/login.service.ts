import { Injectable} from "@angular/core";
import { FormsModule }   from '@angular/forms';
import { Http, Response, Headers } from "@angular/http";
import { ILogin } from "./login"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class LoginService {

    constructor(private _http: Http){
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    login(username: string, password:string): Observable<boolean>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
		    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        return this._http.post('http://192.168.1.191:8080/login',"",{headers:headers})
        .map((res: Response) =>{
            let data =  res.json();
            if (data.result=="ok") {

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({"username":username,"password":password}));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

    public logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
