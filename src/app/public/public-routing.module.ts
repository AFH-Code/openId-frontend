import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { ListeAccountComponent } from './home/liste-account/liste-account.component';
import { LoginComponent } from './login/login/login.component';
import { LoginformComponent } from './login/loginform/loginform.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { RegistrationformComponent } from './registration/registrationform/registrationform.component';
import { SinglepageComponent } from './singlepage/singlepage/singlepage.component';
import { ActiveaccountComponent } from './singlepage/activeaccount/activeaccount.component';

const routes: Routes = [
  {
    path: 'public',
    component: HomeComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      },
      {
        path: 'accueil', // child route path
        component: ListeAccountComponent, // child route component that the router renders
        data: { title: 'Liste des comptes connectés' }
      }
    ],
  },
  {
    path: 'login',
    component: LoginComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
      },
      {
        path: 'form', // child route path
        component: LoginformComponent, // child route component that the router renders
        data: { title: 'Formulaire de connexion' }
      }
    ],
  },
  {
    path: 'registration',
    component: RegistrationComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
      },
      {
        path: 'form', // child route path
        component: RegistrationformComponent, // child route component that the router renders
        data: { title: 'Formulaire d\'inscription' }
      }
    ],
  },
  {
    path: 'singlepage',
    component: SinglepageComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
      },
      {
        path: 'account/activation', // child route path
        component: ActiveaccountComponent, // child route component that the router renders
        data: { title: 'Formulaire d\'inscription' }
      }
    ],
  },

  { path: '',   redirectTo: '/public/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule { }
