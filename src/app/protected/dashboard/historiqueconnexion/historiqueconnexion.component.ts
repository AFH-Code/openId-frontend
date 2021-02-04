import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-historiqueconnexion',
  templateUrl: './historiqueconnexion.component.html',
  styleUrls: ['./historiqueconnexion.component.scss']
})
export class HistoriqueconnexionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.activePosition();
  }

  activePosition()
  {
    $(".dash-link-radius").removeClass('active-link');
    setTimeout(()=>{
          $(".dash-link-radius").eq(2).addClass('active-link');
     }, 200);
  }

}
