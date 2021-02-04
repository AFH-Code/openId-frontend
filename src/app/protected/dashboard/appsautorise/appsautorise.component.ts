import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-appsautorise',
  templateUrl: './appsautorise.component.html',
  styleUrls: ['./appsautorise.component.scss']
})
export class AppsautoriseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.activePosition();
  }

  activePosition()
  {
    $(".dash-link-radius").removeClass('active-link');
    setTimeout(()=>{
          $(".dash-link-radius").eq(0).addClass('active-link');
     }, 200);
  }

}
