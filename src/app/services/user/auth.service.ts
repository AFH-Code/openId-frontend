import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){ }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    alert(user.firstName+'-'+user.lastName+'-'+user.username+'-'+user.password);
    return this.http.post(AUTH_API + 'users', {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "username": user.username,
      "password": user.password
    }, httpOptions);
  }
}
