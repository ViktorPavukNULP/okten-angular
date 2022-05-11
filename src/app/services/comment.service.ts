import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentInterface} from "../models/сomment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'https://jsonplaceholder.typicode.com/comments?_limit=7';

  constructor(private http:HttpClient) { }

  getComments(): Observable<CommentInterface[]> {
    return this.http
  .get<CommentInterface[]>(this.url)
}

}
