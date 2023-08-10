import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageService } from '../../../services/image.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { ProjetService } from '../../../services/projet/projet.service';
import { Router } from '@angular/router';
import { HttpEventType, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { of, Subscription } from 'rxjs';  
import { catchError, map } from 'rxjs/operators'; 

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-applications-oi',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})

export class ApplicationsComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files = [];

  images: any;
  form: any = {"nom": "gf", "description": ""};
  filedata:any;
  url: any;
  currentFileName: string = 'Choisir une image';
  projets: any[];
  projetsSubscription: Subscription;

  constructor(private imageService: ImageService, private spinner: NgxSpinnerService, private toastrService: ToastrService, 
    private projetService: ProjetService, private router: Router) { }

  ngOnInit(): void {
    this.activePosition();
    this.images = this.imageService.getImages();
    
    this.projetService.getAll()
      .subscribe(
        response => {
          this.projets = response['data'];
          console.log(response);
        },
        error => {
          console.log(error);

          this.toastrService.error('Error rencontré lors de la validation de votre compte', 'Major Error', {
            timeOut: 3000,
            closeButton: true,
            progressAnimation: 'increasing'
          });
      });
  }

  activePosition()
  {
    $(".dash-link-radius").removeClass('active-link');
    setTimeout(()=>{
          $(".dash-link-radius").eq(1).addClass('active-link');
     }, 200);
  }

  counter(i: number) {
      return new Array(i);
  }

  openModal(){
    $("#exampleModalCenter").modal('show');
  }

}
