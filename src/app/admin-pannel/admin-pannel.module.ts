import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPannelComponent } from './admin-pannel.component';
import { AdminPannelRouting } from './admin-pannel.routing';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPannelRouting,
    FormsModule
  ],
  declarations: [AdminPannelComponent, SidebarComponent, HeaderComponent]
})
export class AdminPannelModule { }
