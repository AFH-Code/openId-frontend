import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import { Subject } from 'rxjs';
import { LoaderhttpService } from '../../../services/loaderhttp.service';

@Component({
  selector: 'app-loaderhttp',
  templateUrl: './loaderhttp.component.html',
  styleUrls: ['./loaderhttp.component.scss']
})

export class LoaderhttpComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  isLoading: boolean;
  constructor(private loaderService: LoaderhttpService){}

  ngOnInit(): void {
    this.loaderService.currentData.subscribe(data => this.isLoading = data);
  }

}
