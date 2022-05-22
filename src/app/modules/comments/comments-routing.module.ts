import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentDetailsComponent} from "./comments-components/comment-details/comment-details.component";
import {CommentsResolver} from "./comments-services/resolvers/comments.resolver";
import {CommentDetailsResolver} from "./comments-services/resolvers/comment-details.resolver";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    children: [
      {path: ':id', component: CommentDetailsComponent, resolve:{commentData:CommentDetailsResolver}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
