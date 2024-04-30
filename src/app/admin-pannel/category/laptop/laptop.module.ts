import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LaptopComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LaptopComponent]
})
export class LaptopModule { }
