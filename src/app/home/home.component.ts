import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component'
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {

  }


}
