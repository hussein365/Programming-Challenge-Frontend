
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/core/services/weather.service';
import { Weather } from 'src/app/core/models/weather.model';
@Component({
  selector: 'app-masterdata-ta-tatyp',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData:Weather[]=[];
  hideme: boolean[] = [];
  msaters$: Observable<Weather[]>;
  total$: Observable<number>;

  totalRecords: number;
  totalPages: number;
  page = 1;
  pageSize = 10;
  breadCrumbItems: Array<{}>;
  public isCollapsed = true;
  minWeather:Weather;

  constructor(private weatherService:WeatherService,private activatedRoute:ActivatedRoute) {  }

  async ngOnInit(): Promise<void> {
    this.breadCrumbItems = [
      { label: 'Csv Upload' },
      { label: 'Weather', active: true },
    ];
    this._fetchData();

  }
  _fetchData() {
    this.weatherService.getWeathers(this.pageSize.toString(),(this.page - 1).toString()).subscribe((data) => {
      this.weatherData = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages'];
      this.pageSize = data['size'];
      console.log(this.weatherData);
    });



  }
  onPageChange(){
      this._fetchData()
  }

  onPageSizeChange(){
    this.page = 1;
      this._fetchData();
  }
  setting(data:any){
    this.weatherData = data['content'];
    this.totalRecords = data['totalElements'];
    this.totalPages = data['totalPages']
    this.pageSize = data['size']
  }



  method(){

    this.weatherService.getMinWeather().subscribe((data)=> {
      this.minWeather=data;
      this.weatherData=[this.minWeather];
      this.page=1;
      this.pageSize=1;
      this.totalPages=1;
      this.totalRecords=1;
    }
    );
  }
}


