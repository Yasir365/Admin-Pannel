import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AdminPannelService } from './admin-pannel/admin-pannel.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [AdminPannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
