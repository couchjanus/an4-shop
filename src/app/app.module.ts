import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

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
import { CartComponent } from './shop/cart/cart.component';

import { AppRoutingModule } from "./app.routes";
import { FileUploadComponent } from './file-upload/file-upload.component';

import {FileService} from './services/file.service';
import { GalleryComponent } from './gallery/gallery.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
// import { RoutePartsService } from './services/route-parts.service';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    CartComponent,
    FileUploadComponent,
    BreadcrumbComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppCommonModule,
    AppRoutingModule
        
  ],

  providers: [
    // RoutePartsService,
    FileService

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
