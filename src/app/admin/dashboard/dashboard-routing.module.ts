import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            {path: 'user', loadChildren: '../components/user/user.module#UserModule'},
            {path: 'product', loadChildren: '../components/product/product.module#ProductModule'},
            {path: 'order', loadChildren: '../components/order/order.module#OrderModule'},
            {path: 'customer', loadChildren: '../components/customer/customer.module#CustomerModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
