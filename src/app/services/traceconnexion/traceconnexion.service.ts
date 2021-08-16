import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { appSettings } from '../../helpers/appSettings';
import { Subject, Observable   } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TraceconnexionService {

  constructor(private httpClient: HttpClient) { }

  createTraceConnexion(clientid)
  {
    console.log(clientid);
    return this.httpClient.post<any>(appSettings.API_ENDPOINT_PLATFORM + 'traceconnexions' , clientid, appSettings.httpOptions);
  }

  acceptDemandeProjet(traceconnexion: any, currentuser: any)
  {
    return this.httpClient.put<any>(appSettings.API_ENDPOINT_PLATFORM + 'traceconnexions/'+traceconnexion.id , { iduser: currentuser.id }, appSettings.httpOptions);
  }
}
