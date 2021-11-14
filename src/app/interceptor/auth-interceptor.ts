import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserSessionService } from '../services/user-session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private session: UserSessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.

    if(req.url.includes('login') || req.url.includes('signup')){
        return next.handle(req);
    }
    else{
        // Get the auth token from the service.
        const authToken = this.session.getAuthorizationToken();
        console.log(authToken);
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
  }
}