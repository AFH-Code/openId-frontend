import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  deviceObjects = [{name: 'Email', value: 'email', type: "email", default: ""}, {name: 'Téléphone', value: 'telephone', type: "text", default: ""}, {name: 'Pseudonyme', value: 'pseudo', type: "text", default: ""}];
  selectedDeviceObj = this.deviceObjects[1];
  constructor() { }

  ngOnInit(): void {
    this.togglePassWord();
  }

  onChangeObj(newObj)
  {
    console.log(newObj);
    this.selectedDeviceObj = newObj;
  }

  togglePassWord()
  {
    $(".toggle-password").click(function(){
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }
}
