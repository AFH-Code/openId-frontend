import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from '../../../services/projet/projet.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { HttpEventType, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailappli',
  templateUrl: './detailappli.component.html',
  styleUrls: ['./detailappli.component.scss']
})
export class DetailappliComponent implements OnInit {

  projet_id: string;
  currentProjet: any;
  paramForm: UntypedFormGroup;

  form: any = {"nom": "gf", "description": ""};
  filedata:any;
  url: any;
  currentFileName: string = 'Choisir une image';

  constructor(private formBuilder: UntypedFormBuilder, private actRoute: ActivatedRoute, private projetService: ProjetService, private spinner: NgxSpinnerService, private toastrService: ToastrService){ }

  ngOnInit(): void{
    this.actRoute.paramMap.subscribe(params =>{
      this.projet_id = params.get('id');
    });
    this.findClientId(this.projet_id);
    this.initForm();
  }

  initForm() {
      this.paramForm = this.formBuilder.group({
        typeoauth: [''],
        urlconnexion: ['', Validators.required],
        domaineautorise: ['', Validators.required]
      });
  }

  findClientId(idclient){
    this.projetService.findProjetId({'projet_id': this.projet_id}).subscribe(
      data => {
        this.currentProjet = data;
        this.form.nom = data.nom;
        this.form.description = data.description;
        console.log(data);
        //this.roles = this.tokenStorage.getUser().roles;
        //this.spinner.hide();
        //this.router.navigate(['/login/form']);
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

  updateProjet(): void{
    this.spinner.show();
    var myFormData = new FormData();
    myFormData.append('file', this.filedata);
    myFormData.append('nom', this.form.nom);
    myFormData.append('description', this.form.description);
    
    console.log(myFormData);
    this.projetService.updateProjet(this.projet_id, myFormData)
    .subscribe( 
      databackend => {
        if (databackend.type === HttpEventType.UploadProgress) {
          if (databackend.total !== undefined) this.filedata.progress = Math.round(databackend.loaded * 100 / databackend.total);  
        } else if (databackend instanceof HttpResponse) {
          console.log('File is completely uploaded!');
          this.spinner.hide();
          console.log(databackend.body);
          this.currentProjet = databackend.body.projet;
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

  updateProjetKey(): void{
    
    const formValue = this.paramForm.value;
    this.spinner.show();
    alert(this.projet_id);
    this.projetService.updateProjetKey(this.projet_id, formValue).subscribe(
      data => {
        console.log('File is completely uploaded!');
        this.spinner.hide();
        console.log(data);
        this.currentProjet = data.projet;
      },
      err => {
        console.log(err);
        this.spinner.hide();
        this.toastrService.error('Une erreur a été rencontrée lors de la mise à jour de vos informations', 'Major Error', {
          timeOut: 3000,
          closeButton: true,
          progressAnimation: 'increasing'
        });
      }
    );

  }

}
