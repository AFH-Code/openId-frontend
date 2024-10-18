import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormArray, NgForm } from '@angular/forms';
import { TokenProjetStorageService } from '../../../services/projet/token-projet-storage.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../../models/user/User.model';
import { UserService } from '../../../services/user/user.service';
import { AuthService } from '../../../services/user/auth.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})

export class RegistrationformComponent implements OnInit {
    userForm: UntypedFormGroup;
    form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    public imagePath;
    url: string;

    separateDialCode = false;
    SearchCountryField = SearchCountryField;
    CountryISO = CountryISO;
    PhoneNumberFormat = PhoneNumberFormat;
    preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

    emailClient: string=''; telClient: string=''; domaineClient: string=''; nomClient: string=''; prenomClient: string='';

    constructor(private formBuilder: UntypedFormBuilder,
      private userService: UserService,
      private router: Router,
      private authService: AuthService,
      private spinner: NgxSpinnerService, 
      private toastrService: ToastrService,
      private activatedRoute: ActivatedRoute,
      private tokenProjetStorageService: TokenProjetStorageService
    ) { }

    ngOnInit(): void {
      
      this.togglePassWord();
      this.activatedRoute.queryParams.subscribe(params => {    
          let AuthClient = params['clientid'];
          if(AuthClient != undefined){
            this.tokenProjetStorageService.saveProjetToken(AuthClient);
          }
          let emailClient = params['email'];
          if(emailClient != undefined && emailClient != ''){
            //alert(emailClient);
            this.emailClient = emailClient;
          }
          let telClient = params['tel'];
          if(telClient != undefined && telClient != ''){
            //alert(telClient);
            this.telClient = telClient;
          }
          let domaineClient = params['domaine'];
          if(domaineClient != undefined && domaineClient != ''){
            //alert(domaineClient);
            this.domaineClient = domaineClient;
          }
          let nomClient = params['nom'];
          if(nomClient != undefined && nomClient != ''){
            //alert(nomClient);
            this.nomClient = nomClient;
          }
          let prenomClient = params['prenom'];
          if(prenomClient != undefined && prenomClient != ''){
            //alert(prenomClient);
            this.prenomClient = prenomClient;
          }
      });
      this.initForm();
    }

    changePreferredCountries(){
      this.preferredCountries = [CountryISO.Cameroon, CountryISO.Canada];
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

    //CONTRUCTION DU TEMPLATE
    //Méthode Réactive
    initForm(){
      this.userForm = this.formBuilder.group({
        firstName: [this.prenomClient, Validators.required],
        lastName: [this.nomClient, Validators.required],
        username: [this.emailClient, Validators.required],
        password: ['', Validators.required],
        phone: [this.telClient, Validators.required]
      });
      this.form.firstName = this.prenomClient;
      this.form.lastName = this.nomClient;
      this.form.username = this.emailClient;
      this.form.phone = this.telClient;
    }

    // onSubmitForm() {
    //    const formValue = this.userForm.value;
    //    const newUser = new User(
    //      formValue['firstName'],
    //      formValue['lastName'],
    //      formValue['username'],
    //      formValue['password']
    //    );
    //    this.userService.addUser(newUser);
    //    this.router.navigate(['/users']);
    //  }


     //Méthode templateUrl
     onSubmit(form: NgForm): void {
       this.spinner.show();
       console.log(this.form);
       
       this.authService.register(this.form).subscribe(
         data => {
           console.log(data);
           this.isSuccessful = true;
           this.isSignUpFailed = false;

           this.spinner.hide();
           this.router.navigate(['/singlepage/account/activation', 
           data.user.id, data.user.notificationtype, data.user.notificationstatus]);
         },
         err => {
           this.errorMessage = err.error.message;
           console.log(err);
           this.isSignUpFailed = true;

           this.spinner.hide();
           this.toastrService.error('Error de connexion', 'Major Error', {
             timeOut: 3000,
             closeButton: true,
             progressAnimation: 'increasing'
           });
         }
       );
     }
  }
