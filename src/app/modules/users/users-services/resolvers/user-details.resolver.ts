import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IUser} from "../../../../models/IUser";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<IUser> {
  constructor(private userService:UserService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    let {id} = route.params;
    return this.userService.getById(id);
  }

}
