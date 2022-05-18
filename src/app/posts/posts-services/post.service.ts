import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../../models/IPost";
import {urls} from "../../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient
      .get<IPost[]>(`${urls.posts}?_limit=7`)
  }

  getById(id: string): Observable<IPost> {
    return this.httpClient
      .get<IPost>(`${urls.posts}/${id}`)
  }

}
