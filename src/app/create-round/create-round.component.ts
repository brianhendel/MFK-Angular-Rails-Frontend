import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-round',
  templateUrl: './create-round.component.html',
  styleUrls: ['./create-round.component.sass']
})
export class CreateRoundComponent implements OnInit {

  newRound = {name: '', url_1: '', url_2: '', url_3: ''};

  @Output() onFormResult = new EventEmitter<any>();

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  onCreateSubmit() {
    this.apiService.apiCreateRounds(this.newRound)
    this.router.navigate(['/rounds'])
  }

}
