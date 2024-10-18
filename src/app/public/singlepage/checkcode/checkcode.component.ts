import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkcode',
  templateUrl: './checkcode.component.html',
  styleUrls: ['./checkcode.component.scss']
})
export class CheckcodeComponent implements OnInit {

  user_id: string;
  accountKey: string;
  constructor(private actRoute: ActivatedRoute, private spinner: NgxSpinnerService,
    private toastrService: ToastrService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(params => {
        this.accountKey = params['accountKey'];
        console.log(params)
        //alert(this.accountKey)
    });
  }

  onSubmit(form: NgForm):void {
    console.log(form.value);

    const code = form.value['code'];
    const password = form.value['password'];
    const newpassword = form.value['newpassword'];
    if(password == newpassword && this.accountKey.length > 0)
    {
      this.spinner.show();
      this.userService.updatePasswordAccountkey({"code": code, "password": password, "accountkey": this.accountKey}).subscribe(
        data => {
          this.spinner.hide();
          this.router.navigate(['/login/form']);
        },
        err => {
          this.spinner.hide();
          this.toastrService.error('Error rencontré lors de l\'envois du code de renouvellement du mot de passe', 'Major Error', {
            timeOut: 3000,
            closeButton: true,
            progressAnimation: 'increasing'
          });
        }
      );
    }else{
      this.spinner.hide();
        this.toastrService.error('Error rencontré lors de l\'envois du code de renouvellement du mot de passe', 'Major Error', {
          timeOut: 3000,
          closeButton: true,
          progressAnimation: 'increasing'
      });
    }
  }

}
