import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable()

export class WeatherService {

  private weatherSource= new BehaviorSubject<any>(null);
  currentWeather = this.weatherSource.asObservable();

    getWeather(location:string) {
      this.weatherSource.next(location)
    }


}