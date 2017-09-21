import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Category } from '../models';

const API_URL = 'http://localhost:3000';
// const API_URL = 'http://jsonstub.com/categories';

@Injectable()
export class CategoryService {
    
  // private headers = new Headers({'Content-Type': 'application/json; charset=utf-8',
  //       'JsonStub-User-Key': 'df7a6d37-1f7d-4f7a-b451-df95b2cd8d43',
  //       'JsonStub-Project-Key': 'f21cd783-78f9-4104-8b72-f23857da4604'});
private headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});


  private categoriesUrl = `${API_URL}/categories`;  // URL to web api
  // private categoriesUrl = `${API_URL}`;  // URL to web api

  constructor(private http: Http) {  }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.categoriesUrl)
        .map(res => res.json()).toPromise()
        .catch(this.handleError);
  }


  getCategory(id: number): Promise<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get(url)
      .map(res => res.json()).toPromise()
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Category> {
    return this.http
      .post(this.categoriesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .map(res => res.json()).toPromise()
      .catch(this.handleError);
  }

  update(category: Category): Promise<Category> {
    const url = `${this.categoriesUrl}/${category.id}`;
    return this.http
      .put(url, JSON.stringify(category), {headers: this.headers})
      .toPromise()
      .then(() => category)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
