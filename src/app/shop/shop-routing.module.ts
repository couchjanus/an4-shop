import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent, ProductListComponent } from './index';
// import { ProductComponent }  from './product/product.component';
// import { ProductListComponent }  from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'list',
    component: ProductListComponent,
  },
];



@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ShopRoutingModule{ }
