import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
// import { IgxDragDropModule, IgxDialogModule } from "igniteui-angular";
import { NgApexchartsModule } from "ng-apexcharts";


const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // IgxDragDropModule,
    // IgxDialogModule,
    NgApexchartsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
