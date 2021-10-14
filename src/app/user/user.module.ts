import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserListComponent,
    UserDetailComponent,
    HomeComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
