import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDayOfWeek'
})



export class GetDayOfWeekPipe implements PipeTransform {
 

  days: Array<string>=['Niedziela','Poniedziałek','Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  time:any;
  date:any

  transform(dt: any): any {
 
    this.time=parseInt(dt);
 
    this.date=new Date(this.time);
    this.date=this.date.getDay();

    return this.days[this.date];

  }

}