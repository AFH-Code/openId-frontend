import { NgModule } from '@angular/core';
import { ActiveaccountComponent } from './activeaccount/activeaccount.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResetpasswordoneComponent } from './resetpasswordone/resetpasswordone.component';
import { CheckcodeComponent } from './checkcode/checkcode.component';


@NgModule({
  declarations: [ActiveaccountComponent, SinglepageComponent, ResetpasswordoneComponent, CheckcodeComponent],
  imports: [
    SharedModule
  ]
})
export class SinglepageModule { }
