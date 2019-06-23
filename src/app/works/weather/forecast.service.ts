import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'
import { ForecastComponent } from './forecast/forecast.component'

@Injectable()

export class ForecastService {

  private forecastSource= new BehaviorSubject<any>(null);
  currentForecast = this.forecastSource.asObservable();

    getForecast(location:string) {
      this.forecastSource.next(location)
    }


}