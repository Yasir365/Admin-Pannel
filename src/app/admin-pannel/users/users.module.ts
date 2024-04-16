import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { BlockedUserComponent } from './blocked-user/blocked-user.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      { path: '', redirectTo: 'active-users', pathMatch: 'full' },
      { path: 'active-users', component: ActiveUsersComponent },
      { path: 'blocked-users', component: BlockedUserComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsersComponent, ActiveUsersComponent, BlockedUserComponent]
})
export class UsersModule { }
