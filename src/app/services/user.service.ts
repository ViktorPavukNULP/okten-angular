import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {UserInterface} from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http
      .get<UserInterface[]>(this.url)
  }

}
