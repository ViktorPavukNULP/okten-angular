import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IPost} from "../../../../models/IPost";
import {PostService} from "../post.service";

@Injectable({
  providedIn: 'root'
})
export class PostDetailsResolver implements Resolve<IPost> {

  constructor(private postService:PostService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    let {id} = route.params;
    return this.postService.getById(id);
  }

}
