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

    constructor(private _http: Http){}
    //'appDataTeste/usersTest.json'
    login(username: string, password:string): Observable<ILogin>{ 
           
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            let body = `username=${username}&password=${password}`;
            return this._http.post('http://192.168.10.117:8080/login', body, {headers:headers})
            .map((res: Response) => <ILogin> res.json())
            .catch(this.handleError);
        }

        private handleError(error: Response) {
            console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}



