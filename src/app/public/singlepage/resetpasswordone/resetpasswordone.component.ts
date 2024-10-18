import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resetpasswordone',
  templateUrl: './resetpasswordone.component.html',
  styleUrls: ['./resetpasswordone.component.scss']
})
export class ResetpasswordoneComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private spinner: NgxSpinnerService, 
    private toastrService: ToastrService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void {
    console.log(form.value);

    const username = form.value['username'];
    this.spinner.show();
    this.userService.resetPasswordWithCode({"username": username}).subscribe(
      data => {
        this.spinner.hide();
        this.router.navigate(['/singlepage/check/code/user'], { queryParams: {accountKey: data.accountKey}});
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
  }

}
