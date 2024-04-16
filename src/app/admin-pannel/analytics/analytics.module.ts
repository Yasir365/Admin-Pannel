import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AnalyticsComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnalyticsComponent]
})
export class AnalyticsModule { }
