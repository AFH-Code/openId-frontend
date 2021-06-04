import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DevelopperComponent } from './developper/developper.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ModalappliComponent } from './modalappli/modalappli.component';
import { DetailappliComponent } from './detailappli/detailappli.component';



@NgModule({
  declarations: [DevelopperComponent, ApplicationsComponent, ModalappliComponent, DetailappliComponent],
  imports: [
    SharedModule
  ]
})
export class DevelopperModule { }
