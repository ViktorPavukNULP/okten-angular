import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://jsonplaceholder.typicode.com/posts?_limit=5';

  constructor(private http:HttpClient) { }

  getPosts() : Observable<any[]>{
    return this.http
      .get<IPost[]>(this.url)
  }

}
