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
      },
      {
        
        path: "confirmed",
        component: OrderComponent,
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
