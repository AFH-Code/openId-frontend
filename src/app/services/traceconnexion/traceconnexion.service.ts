import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { appSettings } from '../../helpers/appSettings';

@Injectable({
  providedIn: 'root'
})
export class TraceconnexionService {

  constructor(private httpClient: HttpClient) { }

  createTraceConnexion(clientid: any) 
  {
    return this.httpClient.post<any>(appSettings.API_ENDPOINT_PLATFORM + 'traceconnexions' , clientid, appSettings.httpOptions);
  }
}
