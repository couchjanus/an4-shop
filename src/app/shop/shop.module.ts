import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MaterialModule } from '@angular/material';

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
  
  declarations: [ProductListComponent, ProductDetailComponent, CategoryComponent, CartComponent, CheckoutComponent, OrderComponent, ProductComponent, ShowcaseComponent, ThumbnailComponent],
  
  providers: [
    ProductsService,

  ]
})
export class ShopModule { }
