import { Injectable, Output, EventEmitter } from "@angular/core";
import { FormsModule }   from '@angular/forms';
import { Http, Response, Headers } from "@angular/http";
import { ILogin } from "./login"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { API } from '../../main';
import { Subject } from "rxjs/Subject";
import { ReplaySubject } from "rxjs/ReplaySubject";

@Injectable()
export class LoginService {

    private readonly apiURL:string;
    public role: string;
    public isadmin: number;
    public roleChange = new ReplaySubject<any>(1);
    
    constructor(private _http: Http){
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.apiURL = API.url;
    }

    login(username: string, password:string): Observable<boolean>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
		    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        return this._http.post(this.apiURL+'/login',"",{headers:headers})
        .map((res: Response) =>{
            let data =  res.json();
            if (data.result=="ok") {

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({
                    "username":username,
                    "password":password,
                    "user_id":data.data.user_id,
                    "role":data.data.role,
                    "name":data.data.name,
                    "isadmin":data.data.isadmin
                }));
                this.role = data.data.role;
                this.isadmin = data.data.isadmin;

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        }).catch(this.handleError);
    }
  
    public getRole(){
        this.roleChange.next(this.role);
    }
    
    public getSubject(): Observable<any> {
        return this.roleChange.asObservable();
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
