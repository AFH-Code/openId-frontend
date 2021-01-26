import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    RegistrationModule,
    LoginModule
  ]
})
export class PublicModule{ }
