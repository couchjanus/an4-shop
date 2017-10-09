import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes =[
    { 
      path: '', 
      loadChildren: './home/home.module#HomeModule'
     },
    {
      path: 'admin',
      loadChildren: './admin/dashboard/dashboard.module#DashboardModule'
    },
    { path: 'login', loadChildren: './admin/components/login/login.module#LoginModule' },

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