import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  message: any;
  forecastService: any;
  list: any;

 

  constructor(private dataForecast: ForecastService) { }

  ngOnInit() {
    this.dataForecast.currentForecast.subscribe(message => this.message = message)
  }

}