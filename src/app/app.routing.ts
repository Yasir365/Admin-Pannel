import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'admin-pannel', pathMatch: 'full' },
  { path: 'admin-pannel', loadChildren: () => import('./admin-pannel/admin-pannel.module').then(m => m.AdminPannelModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
