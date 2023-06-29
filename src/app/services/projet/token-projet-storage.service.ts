import { Injectable } from '@angular/core';

const PROJET_TOKEN_KEY = "proket-token";

@Injectable({
  providedIn: 'root'
})
export class TokenProjetStorageService {

  constructor() { }

  public saveProjetToken(token: string): void {
    window.localStorage.removeItem(PROJET_TOKEN_KEY);
    window.localStorage.setItem(PROJET_TOKEN_KEY, token);
  }

  public getProjetToken(): string {
    return window.localStorage.getItem(PROJET_TOKEN_KEY);
  }

  public clearProjetToken():void{
    window.localStorage.removeItem(PROJET_TOKEN_KEY);
  }
  
}
