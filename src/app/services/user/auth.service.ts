import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appSettings } from '../../helpers/appSettings';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With', })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){ }

  login(credentials): Observable<any> {
    return this.http.post(appSettings.API_ENDPOINT_PLATFORM + 'users/login', {
      "username": credentials.username,
      "password": credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    console.log(user.firstName+'-'+user.lastName+'-'+user.username+'-'+user.password);
    var countryCode= '';
    var dialCode= '';
    var number= '';
    if(user.phone != null)
    {
      countryCode = user.phone.countryCode;
      dialCode = user.phone.dialCode;
      number = user.phone.nationalNumber;
    }
    return this.http.post(appSettings.API_ENDPOINT_PLATFORM + 'users', {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "username": user.username,
      "password": user.password,
      "countryCode": countryCode,
      "dialCode": dialCode,
      'telephone': number
    }, httpOptions);
  }
}
