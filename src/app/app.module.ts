import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {HttpService} from './admin/services/http.service';
import {httpServiceFactory} from './admin/services/http.service.factory';

import { NotFoundComponent } from './not-found/not-found.component';

import { AppRoutingModule } from "./app.routes";

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
       
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: HttpService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions]
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
