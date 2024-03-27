import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPannelComponent } from './admin-pannel.component';
import { AdminPannelRouting } from './admin-pannel.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminPannelRouting,
    FormsModule
  ],
  declarations: [AdminPannelComponent]
})
export class AdminPannelModule { }
