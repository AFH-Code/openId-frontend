import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderService } from "ngx-ui-loader";

import { PublicheaderComponent } from './publicheader/publicheader.component';
import { PublicfooterComponent } from './publicfooter/publicfooter.component';
import { ProtectedheaderComponent } from './protectedheader/protectedheader.component';
import { ProtectedfooterComponent } from './protectedfooter/protectedfooter.component';
import { ProtectedasidebarComponent } from './protectedasidebar/protectedasidebar.component';

@NgModule({
  declarations: [ PublicheaderComponent, PublicfooterComponent, ProtectedheaderComponent, ProtectedfooterComponent, ProtectedasidebarComponent ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderService
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PublicheaderComponent,
    PublicfooterComponent,
    ProtectedheaderComponent,
    ProtectedfooterComponent,
    ProtectedasidebarComponent,
    NgxUiLoaderService
  ]
})

export class SharedModule{ }
