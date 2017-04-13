import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RoundDashboardComponent } from './round-dashboard/round-dashboard.component';
import { RoundComponent } from './round/round.component';
import { CreateRoundComponent } from './create-round/create-round.component';
import { RoundResultsComponent } from './round-results/round-results.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'rounds', component: RoundDashboardComponent},
  {path: 'create-round', component: CreateRoundComponent},
  {path: 'round-results', component: RoundResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
