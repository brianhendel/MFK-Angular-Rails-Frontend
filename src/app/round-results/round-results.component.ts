import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Round } from '../models/round';
import { Vote } from '../models/vote';

import { ApiService } from '../services/api.service';
import { MaterializeModule } from 'angular2-materialize';
import { ImageZoomModule } from 'angular2-image-zoom';

@Component({
  selector: 'app-round-results',
  templateUrl: './round-results.component.html',
  styleUrls: ['./round-results.component.sass']
})
export class RoundResultsComponent implements OnInit {
    @Input() round: Round;
    votes: Vote[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.apiGetVotes(this.round.id)
      .then(votes => this.votes = votes)
      .then(votes => console.log(votes))

  }

}
