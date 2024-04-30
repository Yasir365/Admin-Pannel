import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobilesComponent } from './mobiles.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:MobilesComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MobilesComponent]
})
export class MobilesModule { }
