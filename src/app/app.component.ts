import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'afh-account';
  currentOffice: string;

  constructor(){
  }

  ngOnInit(): void {

  }

}
