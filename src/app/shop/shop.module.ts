import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductsService } from '../services/products.service';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ShopRoutingModule
  ],
  
  declarations: [ProductListComponent, ProductDetailComponent, CategoryComponent, CartComponent, CheckoutComponent, OrderComponent, ProductComponent, ShowcaseComponent, ThumbnailComponent],
  
  providers: [
    ProductsService,
  ]
})
export class ShopModule { }
