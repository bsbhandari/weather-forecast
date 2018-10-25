
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './common/http.intercepter.service';

export const customProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
];
