import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckoutRoutingModule} from './checkout-routing.module';
import {CheckoutComponent} from './checkout.component';

import { ProductsDataService } from '../../services/products-data.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { DeliveryOptionsDataService } from "../../services/delivery-options.service";

import { CachingService, StorageService, LocalStorageServie } from '../../services';
import { RouterModule } from '@angular/router';
import { RoutePartsService } from '../../services/route-parts.service';

@NgModule({
    imports: [
        CommonModule,
        CheckoutRoutingModule
    ],
    declarations: [
        CheckoutComponent,

    ],
    providers: [
    
    ProductsDataService,
    DeliveryOptionsDataService,
    LocalStorageServie,
    RoutePartsService,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]
})
export class CheckoutModule {
}
