import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPannelComponent } from './admin-pannel.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: AdminPannelComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'analytics', loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule) },
      { path: 'change-password', loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule) },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPannelRouting { }
