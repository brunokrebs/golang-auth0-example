import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthService } from "src/app/service/auth.service";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("CLONING REQUEST")
    request = request.clone({
      setHeaders: {
        Authorization: this.auth.createAuthHeaderValue()
      }
    });
    return next.handle(request);
  }
}