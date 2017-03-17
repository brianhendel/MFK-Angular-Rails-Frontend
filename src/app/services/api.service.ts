import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Round } from '../models/round';
import { Vote } from '../models/vote';
import { ROUNDS } from '../mock-data';

@Injectable()
export class ApiService {
  private roundsUrl = '/rounds';

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  apiGetRounds(): Round[] {
    return ROUNDS;
  }

  apiCreateRounds(name: string, url_1: string, url_2: string, url_3: string): Promise<Round> {
    return this.http
      .post(this.roundsUrl, JSON.stringify({ name: name, url_1: url_1, url_2: url_2, url_3: url_3 }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error("ERROR FROM HANDLEERROR", error);
    return Promise.reject(error.message || error);
  }

}
