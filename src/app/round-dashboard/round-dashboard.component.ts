import { Component, OnInit, Input, Output } from '@angular/core';

import { Round } from '../models/round';
import { Vote } from '../models/vote';
import { ROUNDS } from '../mock-data';

import { ApiService } from '../services/api.service';
import { Angular2TokenService } from 'angular2-token';
import { MaterializeModule } from 'angular2-materialize';

@Component({
  selector: 'app-round-dashboard',
  templateUrl: './round-dashboard.component.html',
  styleUrls: ['./round-dashboard.component.sass']
})

export class RoundDashboardComponent implements OnInit {
  rounds: Round[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.apiGetRounds()
      .then(rounds => this.rounds = rounds)
      .then(rounds => {console.log(rounds)})
  }


  submitVote(v: Vote) {
    this.apiService.apiVote(v)
  }
}