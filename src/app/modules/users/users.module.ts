import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users-components/users/users.component';
import {UserComponent} from "./users-components/user/user.component";
import { UserDetailsComponent } from './users-components/user-details/user-details.component';
import {UsersRoutingModule} from "./users-routing.module";



@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
