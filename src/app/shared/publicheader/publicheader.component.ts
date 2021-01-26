import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-publicheader',
  templateUrl: './publicheader.component.html',
  styleUrls: ['./publicheader.component.scss']
})

export class PublicheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opendropDown(){
    $(".profil-dropdown").toggle();
  }
}
