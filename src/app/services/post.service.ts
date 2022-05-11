import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PostInterface} from "../models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://jsonplaceholder.typicode.com/posts?_limit=5';

  constructor(private http:HttpClient) { }

  getPosts() : Observable<PostInterface[]>{
    return this.http
      .get<PostInterface[]>(this.url)
  }

}
