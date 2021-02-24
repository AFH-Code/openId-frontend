import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicheaderComponent } from './publicheader/publicheader.component';
import { PublicfooterComponent } from './publicfooter/publicfooter.component';
import { ProtectedheaderComponent } from './protectedheader/protectedheader.component';
import { ProtectedfooterComponent } from './protectedfooter/protectedfooter.component';
import { ProtectedasidebarComponent } from './protectedasidebar/protectedasidebar.component';
import { HelperDependenciesModule } from './modules/helper-dependencies.module';
import { ConnectheaderComponent } from './connectheader/connectheader.component';

@NgModule({
  declarations: [ PublicheaderComponent, PublicfooterComponent, ProtectedheaderComponent, ProtectedfooterComponent, ProtectedasidebarComponent, ConnectheaderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HelperDependenciesModule
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
    ConnectheaderComponent,
    HelperDependenciesModule
  ]
})

export class SharedModule{ }
