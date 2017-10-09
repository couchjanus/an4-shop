import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class HttpService extends Http {

    constructor(backend: XHRBackend, options: RequestOptions) {
        let token = localStorage.getItem('token');
        options.headers.set('Authorization', `Shopaholic ${token}`);
        super(backend, options);

    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        let token = localStorage.getItem('token');
        if (typeof url === 'string') {
            if (!options) {
                options = {headers: new Headers()};
            }
            options.headers.set('Authorization', `Shopaholic ${token}`);
        } else {
            url.headers.set('Authorization', `Shopaholic ${token}`);
        }

        return super.request(url, options);
    }

    private catchAuthError(self: HttpService) {
        return (res: Response) => {
            if (res.status === 401 || res.status === 403) {
                console.log(res);
            }
            return Observable.throw(res);
        };
    }
}