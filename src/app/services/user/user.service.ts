import { Injectable } from '@angular/core';
import { Subject, Observable   } from 'rxjs';
import { User } from '../../models/user/User.model';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { TokenStorageService } from '../token-storage.service';
import { appSettings } from '../../helpers/appSettings';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  usersObjet = [];

  private dataSource = new BehaviorSubject(this.getCurrentUser());
  currentData = this.dataSource.asObservable();

  constructor(private httpClient: HttpClient, private token: TokenStorageService) { }

  changeData(data: any) {
    this.dataSource.next(data);
  }

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

  activeAccount(data: any): Observable<any>{
    return this.httpClient.post(appSettings.API_ENDPOINT_BASE + 'validate/account', data , appSettings.httpOptions);
  }

  updateDefault(formData){
    let user = this.getCurrentUser();
    return this.httpClient.post<any>(appSettings.API_ENDPOINT_BASE + 'update/user/' + user.id , formData, {  
      reportProgress: true,  
      observe: 'events'
    });  
  }

}

