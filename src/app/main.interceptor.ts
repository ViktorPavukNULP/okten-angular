import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

import {AuthService} from "./services/auth.service";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isLoggedIn: boolean = this.authService.isLoggedIn();

    if (isLoggedIn) {
      request = this.addToken(request, this.authService.getToken());
    }
    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
