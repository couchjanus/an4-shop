import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardService } from '../services';
import { LoginComponent, RegisterComponent, ProfileComponent } from './';

const routes: Routes = [
    {
    path: '',
    children: [
      {
        path: '',
        component: ProfileComponent, canActivate: [GuardService]
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register', 
        component: RegisterComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
