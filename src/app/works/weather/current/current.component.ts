import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'; 
//import { BehaviorSubject} from 'rxjs';



@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit{

  weatherService: WeatherService;
  isLoaded=false;
  message:any;

constructor(private data: WeatherService) {}

ngOnInit() {
  this.data.currentWeather.subscribe(message => this.message = message)
}

}
