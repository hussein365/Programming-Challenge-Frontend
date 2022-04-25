
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from '../models/weather.model';



@Injectable({
  providedIn: 'root'
})
export class WeatherService{



  api1:string='http://localhost:8080/api/weathers';

  api2:string='http://localhost:8080/api/minWeather';



  constructor( private httpClient: HttpClient) {
  }




public getWeathers(pageSize:string,pageno:string):Observable<Weather[]>{

  const params=new HttpParams()
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Weather[]>(this.api1,{params})
  .pipe(map(data => data as Weather[]));;

}

public getMinWeather():Observable<Weather>{

  return this.httpClient
  .get<Weather>(this.api2)
  .pipe(map(data => data as Weather));;

}


}
