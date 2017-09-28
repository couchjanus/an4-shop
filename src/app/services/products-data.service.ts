import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Product } from "../models";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CachingService } from "./";

let count = 0;
const API_URL = 'http://localhost:3000';

@Injectable()
export class ProductsDataService extends CachingService {
  private products: Observable<Product[]>;

  public constructor(private http: Http) {
    super();
  }

  public all(): Observable<Product[]> {
    return this.cache<Product[]>(() => this.products,
           (val: Observable<Product[]>) => this.products = val,
           () => this.http
           .get(API_URL + '/products')
           .map((response) => response.json()
           .map((item) => {
                let model = new Product();
                model.updateFrom(item);
                return model;
           })));
  }
}
