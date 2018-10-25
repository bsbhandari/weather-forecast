
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './common/http.intercepter.service';
import { APP_BASE_HREF } from '@angular/common';

export const customProviders = [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
];
