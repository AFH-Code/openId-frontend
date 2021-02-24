import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { HistoriqueconnexionComponent } from './historiqueconnexion/historiqueconnexion.component';
import { ListecompteComponent } from './listecompte/listecompte.component';
import { AppsautoriseComponent } from './appsautorise/appsautorise.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StatistiqueComponent,
    HistoriqueconnexionComponent,
    ListecompteComponent,
    AppsautoriseComponent,
    UpdateuserComponent
  ],
  imports: [
    SharedModule
  ]
})
export class DashboardModule{ }
