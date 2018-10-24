import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor() { }
    // Used for intercept the request and response
    // Used to handle common errors for api's
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({ setHeaders: { 'Content-Type': 'application/json' } });
        request.params.set('appid', environment.apiKey); //setting api key
        return next.handle(request).pipe(
            tap(event => { }, error => {
                if (error.status === 401 || error.status === 403) {
                    console.log('You are not authorized to perform this action.');
                }
            })
        );
    }
}
