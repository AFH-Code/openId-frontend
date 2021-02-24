import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { CustomtoastComponent } from './customtoast/customtoast.component';


@NgModule({
  declarations: [CustomtoastComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
    timeOut: 10000,
    preventDuplicates: true,
  })
  ],
  exports: [
    NgxSpinnerModule,
    ToastrModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelperDependenciesModule { }
