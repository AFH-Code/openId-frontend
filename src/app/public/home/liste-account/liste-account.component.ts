import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../../../services/token-storage.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-liste-account',
  templateUrl: './liste-account.component.html',
  styleUrls: ['./liste-account.component.scss']
})
export class ListeAccountComponent implements OnInit {

  listeaccount: any[];
  constructor(private tokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    this.dropdown();

    this.listeaccount = JSON.parse(this.tokenStorageService.getListeUser());
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

  openDropDown(id: any)
  {
    $('.dropdown-menu-'+id).toggleClass("dropdown__menu--active");
  }
  
}
