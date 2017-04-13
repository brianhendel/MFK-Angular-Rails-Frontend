import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Round } from '../models/round';

import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-round-active',
  templateUrl: './round-active.component.html',
  styleUrls: ['./round-active.component.sass']
})
export class RoundActiveComponent implements OnInit {
  activeRound: Round = null;
  data: boolean = false;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.refreshData()
    console.log(this.activeRound)
  }

  private refreshData() {
    this.apiService.apiGetActiveRound()
      .then(activeRound => {
        if (this.activeRound === null) {
          this.activeRound = activeRound[0];
          console.log(this.activeRound)
          this.data = true;
        }
        else if (this.activeRound.id !== activeRound[0].id) {
          this.activeRound = activeRound[0];
          console.log(this.activeRound)

        }
      })
    this.subscribeToData()
  }

  private subscribeToData() {
    Observable.timer(5000).first().subscribe(() => this.refreshData())
  }
}
