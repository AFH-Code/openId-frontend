import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { HttpEventType, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators'; 
import { TokenStorageService } from '../../../services/token-storage.service';
import { ImageService } from '../../../services/image.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})

export class UpdateuserComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files = [];

  images: any;

  form: any = {"nom": "gf", "prenom": ""};
  formContact: any = {"email": "", "telephone": ""};
  /* Variabe to store file data */
  filedata:any;

  currentuser: any;
  currentFileName: string;
  userContactForm: UntypedFormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    telephone: ['', Validators.required]
  });
  url: any;

  constructor(private spinner: NgxSpinnerService, private toastrService: ToastrService, private userservice: UserService, 
    private router: Router, private tokenStorage: TokenStorageService, private imageService: ImageService, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    //this.currentuser = this.userservice.getCurrentUser();

    this.userservice.currentData.subscribe(data => this.currentuser = data);
    
    if(this.currentuser != null){
      this.form.nom = this.currentuser.firstName;
      this.form.prenom = this.currentuser.lastName;
    }

    this.images = this.imageService.getImages();
  }

  onSubmit(): void {
    this.spinner.show();
    var myFormData = new FormData();
    myFormData.append('imgprofil', this.filedata);
    myFormData.append('nom', this.form.nom);
    myFormData.append('prenom', this.form.prenom);

    this.userservice.updateDefault(myFormData)
    .subscribe(
      databackend => {
        if (databackend.type === HttpEventType.UploadProgress) {
          if (databackend.total !== undefined) this.filedata.progress = Math.round(databackend.loaded * 100 / databackend.total);  
        } else if (databackend instanceof HttpResponse) {
          console.log('File is completely uploaded!');
          this.spinner.hide();
          console.log(databackend.body);
          this.currentuser.imgprofil = databackend.body.imgprofil;
          this.currentuser.firstname = databackend.body.firstname;
          this.currentuser.lastname = databackend.body.lastname;

          this.userservice.changeData(this.currentuser);
          this.tokenStorage.UpdateUserLocalListe(this.currentuser);
        }
      },
      error => {
        this.spinner.hide();
        this.toastrService.error('Une erreur a été rencontrée lors de la mise à jour de vos informations', 'Major Error', {
          timeOut: 3000,
          closeButton: true,
          progressAnimation: 'increasing'
        });
      }
    );

    /*.pipe(   
      map(event => {   
        switch (event.type) {  
          case HttpEventType.UploadProgress:  
          this.filedata.progress = Math.round(event.loaded * 100 / event.total);  
            break;  
          case HttpEventType.Response:  
            return event;  
        }  
      }),  
      catchError((error: HttpErrorResponse) => {  
        this.filedata.inProgress = false;  
        return of(`${this.filedata.data.name} upload failed.`);  
      }))
      .subscribe(
      databackend => {
        this.spinner.hide();
        console.log(databackend); 
        //this.router.navigate(['/dashboard']);
      },
      err => {
        this.spinner.hide();
        this.toastrService.error('Error de connexion', 'Major Error', {
          timeOut: 3000,
          closeButton: true,
          progressAnimation: 'increasing'
        });
      }
    );*/
  }

  /* File onchange event */
  fileEvent(event){
      this.filedata = event.target.files[0];
      this.currentFileName = this.filedata.name+'  ('+Math.round(this.filedata.size/1024)+')Ko';

      //Extraire le chemin d'accès au ficier
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result; 
      }
  }

  uploadFile(file) {  
    const formData = new FormData();  
    formData.append('file', file.data);  
    file.inProgress = true;  
    this.userservice.updateDefault(formData).pipe(  
      map(event => {  
        switch (event.type) {  
          case HttpEventType.UploadProgress:  
            file.progress = Math.round(event.loaded * 100 / event.total);  
            break;  
          case HttpEventType.Response:  
            return event;  
        }  
      }),  
      catchError((error: HttpErrorResponse) => {  
        file.inProgress = false;  
        return of(`${file.data.name} upload failed.`);  
      })).subscribe((event: any) => {  
        if (typeof (event) === 'object') {  
          console.log(event.body);  
        }  
      });  
  }

  private uploadFiles() {  
      this.fileUpload.nativeElement.value = '';  
      this.files.forEach(file => {  
        this.uploadFile(file);  
      });  
  }

  onClick() {  
      const fileUpload = this.fileUpload.nativeElement;
      
      fileUpload.onchange = () => {  
        for (let index = 0; index < fileUpload.files.length; index++)  
        {  
          const file = fileUpload.files[index];  
          this.files.push({ data: file, inProgress: false, progress: 0});  
        }  
        this.uploadFiles();  
      };  

      fileUpload.click();  
  }

  onUpdateContact(formContact: NgForm): void {
    console.log(this.formContact);

    this.userservice.saveUpdateContact(this.formContact).subscribe({
      next: (response) => {
        console.log(response);
        this.toastrService.success('Avec succès', 'Mise à jour éffectuée');
      },
      error: err => console.log(err),
      complete: () => console.log('complete')
    })
  }

}
