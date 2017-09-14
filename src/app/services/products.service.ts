import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { DATA } from '../mock/data';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  
  constructor(private http: Http) { }
  
  getData(): Promise<any>{
    return Promise.resolve(DATA)
  }

  getRemoteData(url): Observable<any>{
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
