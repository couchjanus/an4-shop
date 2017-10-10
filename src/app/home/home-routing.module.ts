import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            {path: 'about', loadChildren: './about/about.module#AboutModule',},
            {path: 'home', loadChildren: './catalog/catalog.module#CatalogModule',},
            {path: 'checkout', loadChildren: '../shop/checkout/checkout.module#CheckoutModule',}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
