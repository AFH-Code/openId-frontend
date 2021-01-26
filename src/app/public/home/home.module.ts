import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ListeAccountComponent } from './liste-account/liste-account.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ HomeComponent, ListeAccountComponent ],
  imports: [
    SharedModule,
    BrowserModule
  ]
})
export class HomeModule { }
