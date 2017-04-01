import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Round } from '../models/round';
import { Vote } from '../models/vote';
import { ROUNDS } from '../mock-data';

@Injectable()
export class ApiService {
  private roundsUrl = 'http://localhost:3000/rounds'
  private votesUrl = 'http://localhost:3000/votes'
  
  /*'https://mfk-angular-rails-backend.herokuapp.com/rounds';
  'https://mfk-angular-rails-backend.herokuapp.com/votes';*/

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  apiGetRounds(): Promise<Round[]> {
    return this.http
      .get(this.roundsUrl)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  apiCreateRounds(newRound): Promise<Round> {
    return this.http
      .post(this.roundsUrl, JSON.stringify(newRound), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  apiVote(v: Vote) {
    console.log("Submitted vote on " + v.round_id + " from " + v.user);
    console.log(v);
    return this.http
      .post(this.votesUrl, JSON.stringify(v), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("ERROR FROM HANDLE-ERROR", error);
    return Promise.reject(error.message || error);
  }

}
