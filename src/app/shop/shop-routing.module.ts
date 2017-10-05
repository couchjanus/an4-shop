import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent, ProductDetailComponent, CheckoutComponent, OrderComponent } from './index';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        data: {
          breadcrumb: "Checkout Page"
        } 
        
      },
      {
        
        path: "confirmed",
        component: OrderComponent,
        data: {
          breadcrumb: "Order Page"
        } 
        
      },
      {
        path: ':id', 
        component: ProductDetailComponent, 
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ShopRoutingModule{ }
