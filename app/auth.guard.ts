import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ILogin } from "./menu/login/login";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        var user_data = <ILogin> JSON.parse(localStorage.getItem('currentUser'));
        if (user_data) {
            // logged in so return true
            let roles = route.data["roles"] as Array<string>;
            return (roles == null || roles.indexOf(user_data.role) != -1);
        }
        // not logged in so redirect to login page
        this.router.navigate(['']);
        return false;
    }
}