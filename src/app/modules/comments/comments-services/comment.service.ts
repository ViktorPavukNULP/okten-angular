import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants/urls";
import {IComment} from "../../../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.httpClient
      .get<IComment[]>(`${urls.posts}?_limit=7`)
  }

  getById(id: string): Observable<IComment> {
    return this.httpClient
      .get<IComment>(`${urls.posts}/${id}`)
  }
}
