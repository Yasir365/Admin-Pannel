import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChangePasswordComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
