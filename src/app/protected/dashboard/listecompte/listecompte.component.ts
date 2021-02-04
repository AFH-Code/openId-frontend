import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-listecompte',
  templateUrl: './listecompte.component.html',
  styleUrls: ['./listecompte.component.scss']
})
export class ListecompteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.activePosition();
  }

  activePosition()
  {
    $(".dash-link-radius").removeClass('active-link');
    setTimeout(()=>{
          $(".dash-link-radius").eq(3).addClass('active-link');
     }, 200);
  }

}
