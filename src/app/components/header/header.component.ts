import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = this.authService.isLoggedIn();

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.deleteToken();
    this.loggedIn = false;
  }
}
