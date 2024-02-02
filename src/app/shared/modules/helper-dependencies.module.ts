import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { CustomtoastComponent } from './customtoast/customtoast.component';
import { OverlayComponent } from './overlay/overlay.component';
import { LoaderhttpComponent } from './loaderhttp/loaderhttp.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [CustomtoastComponent, OverlayComponent, LoaderhttpComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    NgxIntlTelInputModule,
    ToastrModule.forRoot({
    timeOut: 10000,
    preventDuplicates: true,
  })
  ],
  exports: [
    NgxSpinnerModule,
    ToastrModule,
    OverlayComponent,
    LoaderhttpComponent,
    NgxIntlTelInputModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelperDependenciesModule { }
