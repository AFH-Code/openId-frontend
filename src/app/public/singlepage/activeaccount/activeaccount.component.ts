import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activeaccount',
  templateUrl: './activeaccount.component.html',
  styleUrls: ['./activeaccount.component.scss']
})
export class ActiveaccountComponent implements OnInit {

  user_id: string;
  typealert: string;
  alertstatus: string;

  constructor(private actRoute: ActivatedRoute, private spinner: NgxSpinnerService, 
    private toastrService: ToastrService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.user_id = params.get('id');
      this.typealert = params.get('typealert');
      this.alertstatus = params.get('alertstatus');
    });
  }

  onSubmit(form: NgForm):void {
    console.log(form.value);

    const code = form.value['code'];
    this.spinner.show();
    this.userService.activeAccount({'user_id': this.user_id, "code": code}).subscribe(
      data => {
        //this.roles = this.tokenStorage.getUser().roles;
        this.spinner.hide();
        this.router.navigate(['/login/form']);
      },
      err => {
        this.spinner.hide();
        this.toastrService.error('Error rencontré lors de la validation de votre compte', 'Major Error', {
          timeOut: 3000,
          closeButton: true,
          progressAnimation: 'increasing'
        });
      }
    );

 }

}
