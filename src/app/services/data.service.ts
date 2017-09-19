import { Injectable } from '@angular/core';

import { Product } from '../models';

import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  
  lastId: number = 0;

  products: Product[] = [];

  constructor(private api: ApiService) {
  }

  // POST /products
  addProduct(product: Product): DataService {
    if (!product.id) {
      product.id = ++this.lastId;
    }
    this.products.push(product);
    return this;
  }

  
  // addProduct(product: Product): Observable<Product> {
  //   return this.api.createProduct(product);
  // }


  deleteProductById(id: number): DataService {
    this.products = this.products
      .filter(product => product.id !== id);
    return this;
  }

  
  // deleteProductById(productId: number): Observable<Product> {
  //   return this.api.deleteProductById(productId);
  // }

  // Simulate PUT /products/:id
  updateProductById(id: number, values: Object = {}): Product {
    let product = this.getProductById(id);
    if (!product) {
      return null;
    }
    Object.assign(product, values);
    return product;
  }

  // updateProduct(product: Product): Observable<Product> {
  //   return this.api.updateProduct(product);
  // }

  // Simulate GET /products
  // getAllProducts(): Product[] {
  getAllProducts(): Observable<Product[]>  {
    // return this.products;
    return this.api.getAllProducts();
  }

  // Simulate GET /products/:id
  getProductById(id: number): Product {
    return this.products
      .filter(product => product.id === id)
      .pop();
  }

  // getProductById(productId: number): Observable<Product> {
  //   return this.api.getProductById(productId);
  // }


  // Toggle product available
  toggleProductComplete(product: Product){
    let updatedProduct = this.updateProductById(product.id, {
      available: !product.available
    });
    return updatedProduct;
  }


}
