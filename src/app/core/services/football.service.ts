
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Football } from '../models/football.model';



@Injectable({
  providedIn: 'root'
})
export class FootballService{



  api1:string='http://localhost:8080/api/footballs';

  api2:string='http://localhost:8080/api/minFootball';



  constructor( private httpClient: HttpClient) {
  }




public getFootballs(pageSize:string,pageno:string):Observable<Football[]>{

  const params=new HttpParams()
  .set('size',pageSize)
  .set('page',pageno);

  return this.httpClient
  .get<Football[]>(this.api1,{params})
  .pipe(map(data => data as Football[]));;

}

public getMinFootball():Observable<Football>{

  return this.httpClient
  .get<Football>(this.api2)
  .pipe(map(data => data as Football));;

}


}
