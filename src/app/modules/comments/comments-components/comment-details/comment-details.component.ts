import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../../../models/IComment";
import {CommentService} from "../../comments-services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IComment;

      if (state) {
        this.comment = state
      } else {
        this.commentService.getById(id).subscribe(value => this.comment = value)
      }
    })
  }

}
