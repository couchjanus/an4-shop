import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryComponent } from './category/category.component';

import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';

import { ProductsService } from '../services/products.service';
import { ProductComponent } from './product/product.component';

import { ShopRoutingModule } from './shop-routing.module';

import { ShowcaseComponent } from './showcase/showcase.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

import { ProductsDataService } from '../services/products-data.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { DeliveryOptionsDataService } from "../services/delivery-options.service";
import { CachingService, StorageService, LocalStorageServie } from '../services';
import { 
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdFormFieldModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  StyleModule, } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdFormFieldModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdTableModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdFormFieldModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    StyleModule,
    ShopRoutingModule
  ],
  
  declarations: [
    ProductDetailComponent, 
    CategoryComponent, 
    
    CheckoutComponent, 
    OrderComponent, 
    ProductComponent, 
    ShowcaseComponent, ThumbnailComponent],
 
  
  providers: [
    ProductsService,
    ProductsDataService,
    DeliveryOptionsDataService,
    LocalStorageServie,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]
})
export class ShopModule { }
