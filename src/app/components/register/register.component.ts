import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  userNameError: string;

  constructor(private authService: AuthService, private router: Router) {
  this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup(
      {
        username: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
      }
    )
  }

  register(): void {
    const rawValue = this.form.getRawValue();
    delete rawValue.confirmPassword;
    this.authService.register(rawValue).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        this.userNameError = err.error.username[0];
      }
    })
  }
}
