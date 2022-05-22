import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import {IComment} from "../../../../models/IComment";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentDetailsResolver implements Resolve<IComment> {
  constructor(private commentService:CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    let {id} = route.params;
    return this.commentService.getById(id);
  }

}
