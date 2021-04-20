import { Injectable } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { appSettings } from '../../helpers/appSettings';

const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data', 'Accept': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  currentuser: any;

  constructor(private userservice: UserService, private httpClient: HttpClient) { }

  addNewProjet(formData){
    let user = this.userservice.getCurrentUser();
    alert(user.id);
    return this.httpClient.post<any>(appSettings.API_ENDPOINT_BASE + 'update/user/' + user.id , formData, {  
      reportProgress: true,  
      observe: 'events'
    });  
  }

}
