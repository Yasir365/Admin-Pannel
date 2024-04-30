import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path: '', component: CategoryComponent,
    children: [
      { path: '', redirectTo: 'mobile', pathMatch: 'full' },
      { path: 'mobile', loadChildren: () => import('./mobiles/mobiles.module').then(m => m.MobilesModule) },
      { path: 'laptop', loadChildren: () => import('./laptop/laptop.module').then(m => m.LaptopModule) }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
