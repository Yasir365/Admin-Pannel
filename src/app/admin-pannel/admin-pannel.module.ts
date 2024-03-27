import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPannelComponent } from './admin-pannel.component';
import { AdminPannelRouting } from './admin-pannel.routing';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { AdminSidebarComponent } from './layout/admin-sidebar/admin-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPannelRouting
  ],
  declarations: [AdminPannelComponent, AdminHeaderComponent, AdminSidebarComponent]
})
export class AdminPannelModule { }
