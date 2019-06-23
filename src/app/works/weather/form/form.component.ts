import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';
import { ForecastService } from '../forecast.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  weatherService:any;
  message: any;
  forecastService: any;
  value:string='';
  error:string='';

  constructor(public data: WeatherService, public httpClient: HttpClient, public dataForecast: ForecastService) { }
     // httpClient.get('https://swapi.co/api/planets/?page=2')
     //   .toPromise()
     //   .then((json: ApiResponse) => this.data = json)
       // .catch(err => {
       //   console.warn(err);
       //   alert('Serwer nie działa.')
       // });
 
       ngOnInit() {
        this.data.currentWeather.subscribe(message => this.message = message)
        this.dataForecast.currentForecast.subscribe(message => this.message = message)
      
      }

  
      check(inputValue) {
        inputValue=inputValue.trim();
        if (inputValue==='') {this.error="<b>Pole nie może być puste!</b>";}
        else { 
          this.error="";
          this.sendToApixuWeather(inputValue);
          this.sendForecast(inputValue);
        }
      }

      sendToApixuWeather(location) {
        this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=7869d5d9dca5049b1a329f550a45e590')
          .subscribe(
            (json: any) => {
              // obsluga odpowiedzi z serwera
              //this.weatherData = json;
              console.log(json);
              //this.weatherService = this.weatherData;
              this.data.getWeather(json);
            },
            err => {
              // obsluga bledow w zapytaniu do serwera
              console.warn(err);
              alert('Ups! Wystąpił nieoczekiwany błąd!');
            });
      }

      sendForecast(location) {
        this.httpClient.get('https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=7869d5d9dca5049b1a329f550a45e590')
          .subscribe(
            (json: any) => {
              // obsluga odpowiedzi z serwera
              //this.weatherData = json;
              console.log(json);
              //this.weatherService = this.weatherData;
              this.dataForecast.getForecast(json);
            },
            err => {
              // obsluga bledow w zapytaniu do serwera
              console.warn(err);
            });
      }
}
