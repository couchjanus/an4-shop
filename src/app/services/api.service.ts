import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from '../models';

const API_URL = 'http://localhost:3000';

@Injectable()

export class ApiService {

  constructor(private http: Http) { }

  private handleError (error: Response | any) {
      console.error('ApiService::handleError', error);
      return Observable.throw(error);
  }

  // API: GET /products
  public getAllProducts(): Observable<Product[]> {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/products')
    .map(response => {
      const products = response.json();
      return products.map((product) => new Product(product));
    })
    .catch(this.handleError);
  }

  // API: POST /products
  public createProduct(product: Product) {
    // will use this.http.post()
  }

//   public createProduct (product: Product): Observable <Product> {
//     return this.http
//       .post(API_URL + '/products', product)
//       .map (response => {
//         return new Product(response.json());
//       })
//       .catch (this.handleError);
//   }

  // API: GET /products/:id
  public getProductById(productId: number) {
    // will use this.http.get()
  } 

  // public getProductById(productId: number): Observable<Product> {
  //   return this.http
  //     .get(API_URL + '/products/' + productId)
  //     .map(response => {
  //       return new Product(response.json());
  //     })
  //     .catch(this.handleError);
  // }


  // API: PUT /products/:id
  public updateProduct(product: Product) {
    // will use this.http.put()
  }

  // public updateProduct(product: Product): Observable<Product> {
  //   return this.http
  //     .put(API_URL + '/products/' + product.id, product)
  //     .map(response => {
  //       return new Product(response.json());
  //     })
  //     .catch(this.handleError);
  // }

  // DELETE /products/:id
  public deleteProductById(productId: number) {
    // will use this.http.delete()
  }

  // public deleteProductById(productId: number): Observable<null> {
  //   return this.http
  //     .delete(API_URL + '/products/' + productId)
  //     .map(response => null)
  //     .catch(this.handleError);
  // }

}