import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-protectedheader',
  templateUrl: './protectedheader.component.html',
  styleUrls: ['./protectedheader.component.scss']
})

export class ProtectedheaderComponent implements OnInit {
  currentuser: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //this.currentuser = this.userService.getCurrentUser();

    this.userService.currentData.subscribe(data => this.currentuser = data);
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

  navClose() {
    document.body.classList.remove('hamburger-active');
  }

  navOpen() {
    document.body.classList.add('hamburger-active');
  }
}
