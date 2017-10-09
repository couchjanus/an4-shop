import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogRoutingModule} from './catalog-routing.module';
import {CatalogComponent} from './catalog.component';
import { CartComponent } from '../../shop/cart/cart.component';
@NgModule({
    imports: [
        CommonModule,
        CatalogRoutingModule
    ],
    declarations: [
        CatalogComponent,
        CartComponent
    ]
})
export class CatalogModule {
}
