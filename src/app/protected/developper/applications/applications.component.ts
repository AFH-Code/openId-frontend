import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-applications-oi',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.activePosition();
  }

  activePosition()
  {
    $(".dash-link-radius").removeClass('active-link');
    setTimeout(()=>{
          $(".dash-link-radius").eq(1).addClass('active-link');
     }, 200);
  }

}
