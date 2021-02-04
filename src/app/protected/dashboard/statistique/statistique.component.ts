import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

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
