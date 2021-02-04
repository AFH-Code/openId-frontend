import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-liste-account',
  templateUrl: './liste-account.component.html',
  styleUrls: ['./liste-account.component.scss']
})
export class ListeAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.dropdown();
  }

  dropdown()
  {
    $(".dropdown-btn").click(function(){
       var menu = $(this).find('.dropdown__menu');
       if(menu){
          menu.toggleClass("dropdown__menu--active");
       }
    });
  }
}
