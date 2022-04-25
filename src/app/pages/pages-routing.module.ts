import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from './dashboard/Weather/weather.component';
import { FootballComponent } from './dashboard/football/football.component';


const routes: Routes = [

  { path: 'weather', component: WeatherComponent },

  { path: 'football', component: FootballComponent },







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
