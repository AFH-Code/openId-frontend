import { Injectable } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

const TOKEN_KEY = "auth-token";
const USER_KEY_LISTE = "auth-user-liste";

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {
  usersObjet = [];

  constructor() { }

  signOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public getListeUser(): string{
    return window.localStorage.getItem(USER_KEY_LISTE);
  }

  /*
    A noté que l'objet user reçu ici en paramètre est déjà mentionné comme connecté
  */
  public addUserLocalListe(user): void{
    let curent_liste = JSON.parse(window.localStorage.getItem(USER_KEY_LISTE));
    if(curent_liste){  //Si la liste des utilisateurs n'est pas null on l'hydrate à l'objet users
      this.usersObjet = curent_liste;
    }
    let exist = false;
    for(let entry of this.usersObjet){ //on boucle sur cette liste
      if(entry.id == user.id) //si le compte est déjà est en local, on le connecte
      {
        exist = true;
        entry.connected_user = 1;
      }else{
        entry.connected_user = 0;
      }
    }

    if(exist == false)
    {
      this.usersObjet.push(user);
    }
    window.localStorage.setItem(USER_KEY_LISTE, JSON.stringify(this.usersObjet));
  }

  public UpdateUserLocalListe(user): void{
    let curent_liste = JSON.parse(window.localStorage.getItem(USER_KEY_LISTE));
    if(curent_liste){  //Si la liste des utilisateurs n'est pas null on l'hydrate à l'objet users
      this.usersObjet = curent_liste;
    }

    for(let entry of this.usersObjet){ //on boucle sur cette liste
      if(entry.id == user.id) //si le compte est déjà est en local, on le connecte
      {
        entry.firstname = user.firstname;
        entry.lastname = user.lastname;
        entry.imgprofil = user.imgprofil;
        break;
      }
    }

    window.localStorage.setItem(USER_KEY_LISTE, JSON.stringify(this.usersObjet));
  }
}
