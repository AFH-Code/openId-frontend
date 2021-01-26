import { Injectable } from '@angular/core';
import { Subject, Observable   } from 'rxjs';
import { User } from '../../models/user/User.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

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

}
