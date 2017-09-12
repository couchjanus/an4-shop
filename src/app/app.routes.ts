import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from "./common/layout/layout.component";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShopModule } from './shop/shop.module';

// определение маршрутов
const ROUTES: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
      path: 'shop',
      loadChildren: () => ShopModule
    },
    { path: 'about', component: AboutComponent},
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ 
          RouterModule.forRoot(ROUTES) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 