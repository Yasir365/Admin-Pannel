import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { CompleteOrdersComponent } from './complete-orders/complete-orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: OrdersComponent,
    children: [
      { path: '', redirectTo: 'active-users', pathMatch: 'full' },
      { path: 'complete-orders', component: CompleteOrdersComponent },
      { path: 'pending-orders', component: PendingOrdersComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule { }
