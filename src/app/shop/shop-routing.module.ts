import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from '../services/auth-guard.service';

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
        // canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Checkout Page"
        } 
        
      },
      {
        
        path: "confirmed",
        component: OrderComponent,
        // canActivate: [AuthGuardService],
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
