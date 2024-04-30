import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminSharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: '', component: AnalyticsComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AdminSharedModule
  ],
  declarations: [AnalyticsComponent]
})
export class AnalyticsModule { }
