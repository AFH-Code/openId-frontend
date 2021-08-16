import { NgModule } from '@angular/core';
import { ActiveaccountComponent } from './activeaccount/activeaccount.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResetpasswordoneComponent } from './resetpasswordone/resetpasswordone.component';


@NgModule({
  declarations: [ActiveaccountComponent, SinglepageComponent, ResetpasswordoneComponent],
  imports: [
    SharedModule
  ]
})
export class SinglepageModule { }
