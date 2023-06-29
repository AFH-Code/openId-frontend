import { Component, OnInit } from '@angular/core';
import { TraceconnexionService } from '../../../services/traceconnexion/traceconnexion.service';
import { ToastrService } from 'ngx-toastr';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})

export class StatistiqueComponent implements OnInit {

  traceconnexions: any[];
  constructor(private traceconnexionService: TraceconnexionService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.activePosition();

    this.traceconnexionService.getTraceConnexionUser()
      .subscribe(
        response => {
          this.traceconnexions = response['hydra:member'];
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
          $(".dash-link-radius").eq(0).addClass('active-link');
     }, 200);
  }

}
