import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppCommonModule } from "./common/common.module";
import { ShopModule } from "./shop/shop.module";
import { AdminModule } from "./admin/admin.module";
import { UserModule } from "./user/user.module";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import { ProductsDataService, ShoppingCartService, CachingService, StorageService, LocalStorageServie } from './services';

import { AppRoutingModule } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppCommonModule,
    AppRoutingModule
        
  ],

  providers: [
    // ProductsDataService,
    // LocalStorageServie,
    // { provide: StorageService, useClass: LocalStorageServie },
    // {
    //   deps: [StorageService, ProductsDataService],
    //   provide: ShoppingCartService,
    //   useClass: ShoppingCartService
    // }
    // ShoppingCartService,
    // CachingService,
    // StorageService,

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
