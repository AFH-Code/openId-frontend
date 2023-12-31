import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { ProjetService } from '../../../services/projet/projet.service';
import { Router } from '@angular/router';
import { HttpEventType, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators'; 

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-modalappli',
  templateUrl: './modalappli.component.html',
  styleUrls: ['./modalappli.component.scss']
})
export class ModalappliComponent implements OnInit {

  form: any = {"nom": "gf", "description": ""};
  filedata:any;
  url: any;
  currentFileName: string = 'Choisir une image';

  constructor(private spinner: NgxSpinnerService, private toastrService: ToastrService, private projetService: ProjetService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.spinner.show();
    var myFormData = new FormData();
    myFormData.append('file', this.filedata);
    myFormData.append('nom', this.form.nom);
    myFormData.append('description', this.form.description);

    console.log(myFormData);
    this.projetService.addNewProjet(myFormData)
    .subscribe( 
      databackend => {
        if (databackend.type === HttpEventType.UploadProgress) {
          if (databackend.total !== undefined) this.filedata.progress = Math.round(databackend.loaded * 100 / databackend.total);  
        } else if (databackend instanceof HttpResponse) {
          console.log('File is completely uploaded!');
          this.spinner.hide();
          console.log(databackend.body);
          $("#exampleModalCenter").modal('hide');
          this.router.navigate(['dashboard/dev/detail/appli', databackend.body.projet.id]);
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

}
