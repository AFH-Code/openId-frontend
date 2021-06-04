import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { StatistiqueComponent } from './dashboard/statistique/statistique.component';
import { ApplicationsComponent } from './developper/applications/applications.component';
import { HistoriqueconnexionComponent } from './dashboard/historiqueconnexion/historiqueconnexion.component';
import { ListecompteComponent } from './dashboard/listecompte/listecompte.component';
import { AppsautoriseComponent } from './dashboard/appsautorise/appsautorise.component';
import { UpdateuserComponent } from './dashboard/updateuser/updateuser.component';
import { DetailappliComponent } from './developper/detailappli/detailappli.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      },
      {
        path: 'accueil', // child route path
        component: StatistiqueComponent, // child route component that the router renders
        data: { title: 'Opérations sur le compte' }
      },
      {
        path: 'update/account', // child route path
        component: UpdateuserComponent, // child route component that the router renders
        data: { title: 'Modification du profil Utilisateur' }
      },
      {
        path: 'historique/connexions', // child route path
        component: HistoriqueconnexionComponent, // child route component that the router renders
        data: { title: 'Liste des tentatives de connexions' }
      },
      {
        path: 'liste/compte', // child route path
        component: ListecompteComponent, // child route component that the router renders
        data: { title: 'Liste des comptes utilisateurs' }
      },
      {
        path: 'applis/autorisees', // child route path
        component: AppsautoriseComponent, // child route component that the router renders
        data: { title: 'Liste des applications autorisées' }
      },
      {
        path: 'dev/applications', // child route path
        component: ApplicationsComponent, // child route component that the router renders
        data: { title: 'Liste de mes applications' }
      },
      {
        path: 'dev/detail/appli/:id', // child route path
        component: DetailappliComponent, // child route component that the router renders
        data: { title: 'Formulaire d\'inscription' }
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
