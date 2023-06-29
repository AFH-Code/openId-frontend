import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicfooter',
  templateUrl: './publicfooter.component.html',
  styleUrls: ['./publicfooter.component.scss']
})
export class PublicfooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
