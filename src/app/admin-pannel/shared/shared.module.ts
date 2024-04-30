import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelLoaderComponent } from './tabel-loader/tabel-loader.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [TabelLoaderComponent],
    exports: [TabelLoaderComponent]
})
export class AdminSharedModule { }
