import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';

@NgModule({
  declarations: [RegistrationComponent, RegistrationformComponent],
  imports: [
    SharedModule
  ]
})

export class RegistrationModule{ }
