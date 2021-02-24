import { Injectable } from '@angular/core';
import { Subject, Observable   } from 'rxjs';
import { User } from '../../models/user/User.model';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersObjet = [];
  constructor(private httpClient: HttpClient, private token: TokenStorageService) { }

  addUser(user: User) {
    let appareilObject = {
      "firstname": user.firstName,
      "lastname": user.lastName,
      "username": user.username,
      "password": user.password
    };
    this.httpClient
    .post('http://127.0.0.1:8000/api/users', appareilObject)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  getCurrentUser(){
    let curent_liste = JSON.parse(this.token.getListeUser());
    if(curent_liste){
      this.usersObjet = curent_liste;
    }
    for(let entry of this.usersObjet){
      if(entry.connected_user == 1)
      {
        return entry;
      }
    }
    return null;
  }

  getListeUser()
  {
    let curent_liste = JSON.parse(this.token.getListeUser());
    return curent_liste;
  }

}
