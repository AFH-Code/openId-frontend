import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';
import { SinglepageModule } from './singlepage/singlepage.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    RegistrationModule,
    LoginModule,
    SinglepageModule
  ]
})
export class PublicModule{ }
