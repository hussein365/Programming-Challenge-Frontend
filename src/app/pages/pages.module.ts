import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PagesRoutingModule } from './pages-routing.module';
import { UIModule } from '../shared/ui/ui.module';
import { WeatherComponent } from './dashboard/Weather/weather.component';
import { FootballComponent } from './dashboard/football/football.component';
import { WeatherModule } from './dashboard/weather/weather.module';
import { FootballModule } from './dashboard/football/football.module';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3
};

@NgModule({
  declarations: [
               ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UIModule,
    PerfectScrollbarModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    FootballModule,



  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ]
})
export class PagesModule { }
