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

    
  addProduct(product: Product): Observable<Product> {
    return this.api.createProduct(product);
  }

    
  deleteProductById(productId: number): Observable<Product> {
    return this.api.deleteProductById(productId);
  }

  // Simulate PUT /products/:id
  updateProductById(product: Product): Observable<Product> {
    return this.api.updateProduct(product);
  }
  
  getAllProducts(): Observable<Product[]>  {
    return this.api.getAllProducts();
  }

  // Simulate GET /products/:id

  getProductById(productId: number): Observable<Product> {
    return this.api.getProductById(productId);
  }


  // Toggle product available
  // toggleProductComplete(product: Product){
  //   let updatedProduct = this.updateProductById(product.id, {
  //     available: !product.available
  //   });
  //   return updatedProduct;
  // }


}
