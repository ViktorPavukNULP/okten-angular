import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'https://jsonplaceholder.typicode.com/comments?_limit=7';

  constructor(private http:HttpClient) { }

  getComments(): Observable<any> {
    return this.http
  .get<IComment[]>(this.url)
}

}
