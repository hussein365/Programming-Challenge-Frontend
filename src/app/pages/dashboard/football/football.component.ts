
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/core/services/weather.service';
import { Weather } from 'src/app/core/models/weather.model';
import { Football } from 'src/app/core/models/football.model';
import { FootballService } from 'src/app/core/services/football.service';
@Component({
  selector: 'app-masterdata-ta-tatyp',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {

  footballData:Football[]=[];
  hideme: boolean[] = [];
  msaters$: Observable<Football[]>;
  total$: Observable<number>;

  totalRecords: number;
  totalPages: number;
  page = 1;
  pageSize = 10;
  breadCrumbItems: Array<{}>;
  public isCollapsed = true;
  minFootball:Football;

  constructor(private footballService:FootballService,private activatedRoute:ActivatedRoute) {  }

  async ngOnInit(): Promise<void> {
    this.breadCrumbItems = [
      { label: 'Csv Upload' },
      { label: 'Weather', active: true },
    ];
    this._fetchData();

  }
  _fetchData() {
    this.footballService.getFootballs(this.pageSize.toString(),(this.page - 1).toString()).subscribe((data) => {
      this.footballData = data['content'];
      this.totalRecords = data['totalElements'];
      this.totalPages = data['totalPages'];
      this.pageSize = data['size'];
      console.log(this.footballData);
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
    this.footballData = data['content'];
    this.totalRecords = data['totalElements'];
    this.totalPages = data['totalPages']
    this.pageSize = data['size']
  }



  method(){

    this.footballService.getMinFootball().subscribe((data)=> {
      this.minFootball=data;
      this.footballData=[this.minFootball];
      this.page=1;
      this.pageSize=1;
      this.totalPages=1;
      this.totalRecords=1;
    }
    );


  }

}


