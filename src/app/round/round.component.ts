import { Component, OnInit } from '@angular/core';

import { Round } from '../models/round';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.sass']
})
export class RoundComponent implements OnInit {
  rounds: Round[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.rounds = this.apiService.apiGetRounds();
  }

}
