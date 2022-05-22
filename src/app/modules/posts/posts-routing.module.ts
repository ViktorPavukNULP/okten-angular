import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostDetailsComponent} from "./posts-components/post-details/post-details.component";
import {PostDetailsResolver} from "./posts-services/resolvers/post-details.resolver";
import {PostsResolver} from "./posts-services/resolvers/posts.resolver";
import {PostsGuard} from "./posts-services/guards/posts.guard";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    canActivate: [PostsGuard],
    children: [
      {path: ':id', component: PostDetailsComponent, resolve: {postData: PostDetailsResolver}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
