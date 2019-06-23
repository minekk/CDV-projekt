import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'
import { ContactComponent } from './contact.component'
// @Injectable()
// export class ContactFormService {

// private formSource= new BehaviorSubject<any>(null);
//   currentWeather = this.formSource.asObservable();

//     getWeather(location:string) {
//       this.formSource.next(location)
//     }
// }
export class ContactFormService {
  name: string = "";
  yourMessage: string = "";
  contact: string = "";
}