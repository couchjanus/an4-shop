import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { DeliveryOption } from "../models/delivery-option.model";
import { CachingService } from "./caching.service";

const API_URL = 'http://localhost:3000';

@Injectable()
export class DeliveryOptionsDataService extends CachingService {
  private deliveryOptions: Observable<DeliveryOption[]>;

  public constructor(private http: Http) {
    super();
  }

  public all(): Observable<DeliveryOption[]> {
    return this.cache<DeliveryOption[]>(() => this.deliveryOptions,
           (val: Observable<DeliveryOption[]>) => this.deliveryOptions = val,
           () => this.http
           .get(API_URL + '/delivery')
           .map((response) => response.json()
           .map((item) => {
           let model = new DeliveryOption();
           model.updateFrom(item);
           return model;
      })));

  }
}
