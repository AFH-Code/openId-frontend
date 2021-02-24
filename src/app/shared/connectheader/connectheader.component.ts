import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-connectheader',
  templateUrl: './connectheader.component.html',
  styleUrls: ['./connectheader.component.scss']
})

export class ConnectheaderComponent implements OnInit {
  accountlist: [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.accountlist = this.userService.getListeUser();
  }

}
