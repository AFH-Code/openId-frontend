import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { TokenProjetStorageService } from '../../../services/projet/token-projet-storage.service';
import { AuthService } from '../../../services/user/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { Router } from '@angular/router';

declare var jquery :any;
declare var $ :any;

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})

export class LoginformComponent implements OnInit {

  form: any = {};
  isLoginFailed = false;
  errorMessage = '';
  token = '';

  deviceObjects = [{name: 'Email', value: 'email', type: "email", default: ""}, {name: 'Téléphone', value: 'telephone', type: "text", default: ""}, {name: 'Pseudonyme', value: 'pseudo', type: "text", default: ""}];
  selectedDeviceObj = this.deviceObjects[1];

  constructor(private spinner: NgxSpinnerService, private toastrService: ToastrService, private tokenProjetStorageService: TokenProjetStorageService,
  private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.togglePassWord();
    this.token = this.tokenStorage.getToken();
    // if (this.tokenStorage.getToken()) {
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
  }

  onChangeObj(newObj)
  {
    console.log(newObj);
    this.selectedDeviceObj = newObj;
  }

  onSubmit(): void {
    this.spinner.show();
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.addUserLocalListe(data.user);
        this.isLoginFailed = false;
        //this.roles = this.tokenStorage.getUser().roles;
        this.spinner.hide();

        let AuthProjet = this.tokenProjetStorageService.getProjetToken();
        if(AuthProjet != undefined && AuthProjet != null)
        {
          this.router.navigate(['/public/oauth2'], { queryParams: { clientid: AuthProjet } });
        }else{
          this.router.navigate(['/dashboard']); 
        }
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.spinner.hide();
        this.toastrService.error('Error de connexion', 'Major Error', {
          timeOut: 3000,
          closeButton: true,
          progressAnimation: 'increasing'
        });
      }
    );
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
