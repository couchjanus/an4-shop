import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent, ProductListComponent, ProductDetailComponent } from './index';
// import { ProductComponent }  from './product/product.component';
// import { ProductListComponent }  from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'list',
        component: ProductListComponent,
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
