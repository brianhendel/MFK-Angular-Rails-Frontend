import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

import { Round } from '../models/round';
import { Vote } from '../models/vote';

import { Angular2TokenService } from 'angular2-token';
import { ApiService } from '../services/api.service'
import { MaterializeModule } from 'angular2-materialize';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.sass']
})

export class RoundComponent implements OnInit {
  @Input() round: Round;
  @Input() inDashboard: Boolean;
  v: Vote;
  valid: boolean = false;
  voted: boolean = false;
  showResult: boolean = false;

  constructor(
    protected authTokenService: Angular2TokenService,
    private apiService: ApiService
  ) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.v = new Vote(this.round.id, this.authTokenService.currentUserData.email);
    console.log("ngOnChanges fired");

  }

  vote() {
    if (this.voteCheck(this.v)) {
      this.apiService.apiVote(this.v);
      this.voted = true;
      this.showResult = false;
      this.resetVote();
    } else {
      console.log("Not a valid vote, reset")
      this.resetVote();
    }
  }

  setActive() {
    this.apiService.apiSetActiveRound(this.round.id)
  }

  showResults() {
    if (this.showResult == false) {
      this.showResult = true;
    } else {
      this.showResult = false;
    }
  }

  voteCheck(vote: Vote) {
    var set1: number = vote.vote_1_m + vote.vote_1_f + vote.vote_1_k;
    var set2: number = vote.vote_2_m + vote.vote_2_f + vote.vote_2_k;
    var set3: number = vote.vote_3_m + vote.vote_3_f + vote.vote_3_k;

    var set4: number = vote.vote_1_m + vote.vote_2_m + vote.vote_3_m;
    var set5: number = vote.vote_1_f + vote.vote_2_f + vote.vote_3_f;
    var set6: number = vote.vote_1_k + vote.vote_2_k + vote.vote_3_k;

    if (
      set1 === 1 && set2 === 1 && set3 === 1 &&
      set4 === 1 && set5 === 1 && set6 === 1 &&
      (set1 + set2 + set3 === 3) &&
      (set4 + set5 + set6 === 3)
    ) {
      this.valid = true;
      return true
    } else {
      this.valid = false;
      return false
    }
  }

  resetVote() {
    this.v = new Vote(this.round.id, this.authTokenService.currentUserData.email);
    this.voteCheck(this.v);
  }

  setSelect1(choice: string) {
    if (choice == "m") {
      this.v.vote_1_m = 1;
      this.v.vote_1_f = 0;
      this.v.vote_1_k = 0;
      console.log("First image, voted marry")
    }
    if (choice == "f") {
      this.v.vote_1_m = 0;
      this.v.vote_1_f = 1;
      this.v.vote_1_k = 0;
      console.log("First image, voted fuck")
    }
    if (choice == "k") {
      this.v.vote_1_m = 0;
      this.v.vote_1_f = 0;
      this.v.vote_1_k = 1;
      console.log("First image, voted kill")
    }
    this.voteCheck(this.v);
  }

  setSelect2(choice: string) {
    if (choice == "m") {
      this.v.vote_2_m = 1;
      this.v.vote_2_f = 0;
      this.v.vote_2_k = 0;
      console.log("Second image, voted marry")
    }
    if (choice == "f") {
      this.v.vote_2_m = 0;
      this.v.vote_2_f = 1;
      this.v.vote_2_k = 0;
      console.log("Second image, voted fuck")
    }
    if (choice == "k") {
      this.v.vote_2_m = 0;
      this.v.vote_2_f = 0;
      this.v.vote_2_k = 1;
      console.log("Second image, voted kill")
    }
    this.voteCheck(this.v);
  }

  setSelect3(choice: string) {
    if (choice == "m") {
      this.v.vote_3_m = 1;
      this.v.vote_3_f = 0;
      this.v.vote_3_k = 0;
      console.log("Third image, voted marry")
    }
    if (choice == "f") {
      this.v.vote_3_m = 0;
      this.v.vote_3_f = 1;
      this.v.vote_3_k = 0;
      console.log("Third image, voted fuck")
    }
    if (choice == "k") {
      this.v.vote_3_m = 0;
      this.v.vote_3_f = 0;
      this.v.vote_3_k = 1;
      console.log("Third image, voted kill")
    }
    this.voteCheck(this.v);
  }

}

