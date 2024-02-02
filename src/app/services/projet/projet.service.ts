import { Injectable } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { appSettings } from '../../helpers/appSettings';
import { Subject, Observable   } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data', 'Accept': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  currentuser: any;
  projetsSubject = new Subject<any[]>();
  private projets = [];

  constructor(private userservice: UserService, private httpClient: HttpClient){ }

  addNewProjet(formData){
    let user = this.userservice.getCurrentUser();
    return this.httpClient.post<any>(appSettings.API_ENDPOINT_PLATFORM + 'projets' , formData, {  
      reportProgress: true,  
      observe: 'events'
    });  
  }

  emitProjetSubject() {
    this.projetsSubject.next(this.projets.slice());
  }

  getAll(): Observable<any> {
    return this.httpClient.get(appSettings.API_ENDPOINT_PLATFORM +'projets/user', httpOptions);
  }

  findProjetId(data: any): Observable<any>{
    return this.httpClient.get(appSettings.API_ENDPOINT_PLATFORM + 'projets/'+ data.projet_id , appSettings.httpOptions);
  }

  updateProjet(id, formData)
  {
    return this.httpClient.post<any>(appSettings.API_ENDPOINT_PLATFORM + 'projets/'+id , formData, {  
      reportProgress: true,  
      observe: 'events'
    });
  }

  updateProjetKey(id,form): Observable<any> {
    return this.httpClient.post(appSettings.API_ENDPOINT_PLATFORM + 'auth/users/generate/client/key/projet/'+id, {
      typeoauth: form.typeoauth,
      urlconnexion: form.urlconnexion,
      domaineautorise: form.domaineautorise
    }, appSettings.httpOptions);
  }
}
