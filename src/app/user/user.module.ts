import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { GuardService } from '../services/guard.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    UserRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  providers: [UserService, AuthService, AlertService, BaseRequestOptions, GuardService]
})
export class UserModule { }
