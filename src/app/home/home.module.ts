import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

import {HeaderComponent} from '../shared';


@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        
        
    ]
})
export class HomeModule {
}
