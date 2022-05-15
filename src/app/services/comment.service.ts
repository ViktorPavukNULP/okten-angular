import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentInterface} from "../models/сomment.interface";
import {CommentDetailsInterface} from "../models/сomment-details.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentInterface[]> {
    return this.http
      .get<CommentInterface[]>(`${this.url}?_limit=7`)
  }

  getComment(id: string): Observable<CommentDetailsInterface> {
    return this.http
      .get<CommentDetailsInterface>(`${this.url}/${id}`)
  }

}
