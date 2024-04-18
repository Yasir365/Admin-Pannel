import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AdminPannelService } from './admin-pannel/admin-pannel.service';
import { formValidation } from './admin-pannel/helper/form-validation';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
      maxOpened: 5
    })
  ],
  providers: [AdminPannelService, formValidation],
  bootstrap: [AppComponent]
})
export class AppModule { }
