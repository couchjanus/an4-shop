import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from "./common/layout/layout.component";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
      path: 'shop',
      loadChildren: './shop/shop.module#ShopModule'
    },
    {
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule'
    },
    {
      path: 'auth',
      loadChildren: './user/user.module#UserModule'
    },
    { path: 'about', component: AboutComponent},
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 