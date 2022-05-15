import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostDetailsInterface} from "../../models/post-details.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsObj: PostDetailsInterface;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.postDetailsObj = data as PostDetailsInterface;
      })
  }

}
