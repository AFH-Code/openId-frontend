import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DevelopperComponent } from './developper/developper.component';
import { ApplicationsComponent } from './applications/applications.component';



@NgModule({
  declarations: [DevelopperComponent, ApplicationsComponent],
  imports: [
    SharedModule
  ]
})
export class DevelopperModule { }
