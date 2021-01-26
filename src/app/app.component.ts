import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'afh-account';
  currentOffice: string;

  constructor(private configService: ConfigService){
  }

  ngOnInit(): void {

  }

}
