import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-protectedheader',
  templateUrl: './protectedheader.component.html',
  styleUrls: ['./protectedheader.component.scss']
})

export class ProtectedheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opendropDown(){
    $(".profil-dropdown").toggle();
  }

  togglehamburger()
  {
    if (document.body.classList.contains('hamburger-active')) {
      this.navClose();
    } else {
      this.navOpen();
    }

    $( ".left-sidebar-lg-redim").toggle(10, function(){
      if ($(".left-sidebar-lg-redim").is(":hidden")){
        $(".left-sidebar-lg-redim").hide('slow');
        $('#main-panel-content').removeClass("resize-lg-left-navigation");
        $('#main-panel-content').addClass("resize-sm-left-navigation");
        $(".footer-dash-user").removeClass("resize-pd-footer");
      }else{
        $('#main-panel-content').removeClass("resize-sm-left-navigation");
        $('#main-panel-content').addClass("resize-lg-left-navigation");
        $(".left-sidebar-lg-redim").show('slow');
        $(".footer-dash-user").addClass("resize-pd-footer");
      }
    });
  }

  // Wenn die Navi geschlossen wird, Klasse für »offen« entfernen
  navClose() {
    document.body.classList.remove('hamburger-active');
  }

  // Wenn die Navi geöffnet wird, Klasse für »geschlossen« entfernen
  navOpen() {
    document.body.classList.add('hamburger-active');
  }
}
