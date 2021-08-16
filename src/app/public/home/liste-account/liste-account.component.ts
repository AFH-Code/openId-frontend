import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../../../services/token-storage.service';
import { TraceconnexionService } from '../../../services/traceconnexion/traceconnexion.service';
import { UserService } from '../../../services/user/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-liste-account',
  templateUrl: './liste-account.component.html',
  styleUrls: ['./liste-account.component.scss']
})
export class ListeAccountComponent implements OnInit {

  listeaccount: any[];
  clientid: string;
  traceconnexion: any;
  currentuser: any;
  constructor(private tokenStorageService : TokenStorageService, private activatedRoute: ActivatedRoute, private userservice: UserService,
    private traceconnexionService: TraceconnexionService, private spinner: NgxSpinnerService, private toastrService: ToastrService) { 
    
  }

  ngOnInit(): void {
    this.dropdown();
    this.currentuser = this.userservice.getCurrentUser();
    this.activatedRoute.queryParams.subscribe(params => { 
        let AuthClient = params['clientid'];
        this.clientid = AuthClient;
        //console.log(AuthClient);
        if(AuthClient != undefined){
          this.identifyProjet(AuthClient);
        }
    });

    this.listeaccount = JSON.parse(this.tokenStorageService.getListeUser());
    //console.log(this.currentuser);
  }

  dropdown()
  {
    $(".dropdown-btn").click(function(){
       var menu = $(this).find('.dropdown__menu');
       if(menu){
          menu.toggleClass("dropdown__menu--active");
       }
    });
  }

  openDropDown(id: any)
  {
    $('.dropdown-menu-'+id).toggleClass("dropdown__menu--active");
  }
  

  identifyProjet(idClient: string){
    this.traceconnexionService.createTraceConnexion({clientid: idClient}).subscribe(
      data => {
        this.traceconnexion = data;
        console.log(data);
      },
      err => {
        console.log(err);
        this.spinner.hide();
        this.toastrService.error('Error rencontré lors de la validation de votre compte', 'Major Error', {
          timeOut: 3000,
          closeButton: true,
          progressAnimation: 'increasing'
        });
      }
    );
  }

  validateDemande(traceconnexion: any, currentuser: any)
  {
    this.traceconnexionService.acceptDemandeProjet(traceconnexion, currentuser).subscribe(
      data => {
        this.traceconnexion = data;

        document.location.href= data.projet.redirecturl+'?authcode='+data.authcode;
        console.log(data);
      },
      err => {
        console.log(err);
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
