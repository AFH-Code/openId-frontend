import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../../models/user/User.model';
import { UserService } from '../../../services/user/user.service';
import { AuthService } from '../../../services/user/auth.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})

export class RegistrationformComponent implements OnInit {
    userForm: FormGroup;
    form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private router: Router,
                private authService: AuthService) { }

    ngOnInit(): void {
      this.initForm();
    }

    //CONTRUCTION DU TEMPLATE
    //Méthode Réactive
    initForm() {
      this.userForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    onSubmitForm() {
       const formValue = this.userForm.value;
       const newUser = new User(
         formValue['firstName'],
         formValue['lastName'],
         formValue['username'],
         formValue['password']
       );
       this.userService.addUser(newUser);
       this.router.navigate(['/users']);
     }


     //Méthode templateUrl
     onSubmit(form: NgForm): void {
       this.authService.register(this.form).subscribe(
         data => {
           console.log(data);
           this.isSuccessful = true;
           this.isSignUpFailed = false;
         },
         err => {
           this.errorMessage = err.error.message;
           console.log(err);
           this.isSignUpFailed = true;
         }
       );
     }
  }
