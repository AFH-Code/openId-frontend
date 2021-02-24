import { Injectable } from '@angular/core';
import { Subject, Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  ihm : string = 'public'; //Interface Homme Machine :::IHM
  constructor() {}

  setIHM(ihm): void {
    this.ihm = ihm;
  }
  
}
