import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../models/IComment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[]

  constructor(private CommentService: CommentService) {
  }

  ngOnInit(): void {
    this.CommentService.getComments()
      .subscribe(value => this.comments = value)
  }

}
