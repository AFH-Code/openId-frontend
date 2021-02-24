import { NgModule } from '@angular/core';
import { ActiveaccountComponent } from './activeaccount/activeaccount.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ActiveaccountComponent, SinglepageComponent],
  imports: [
    SharedModule
  ]
})
export class SinglepageModule { }
