import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';

@NgModule({
  declarations: [LoginComponent, LoginformComponent],
  imports: [
    SharedModule
  ]
})

export class LoginModule { }
