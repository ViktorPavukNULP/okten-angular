import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserDetailsInterface} from "../../models/user-details.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

   userDetailsObj: UserDetailsInterface;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.userDetailsObj = data as UserDetailsInterface;
    });
  }

}
