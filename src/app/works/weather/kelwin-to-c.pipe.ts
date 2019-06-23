import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelwinToC'
})
export class KelwinToCPipe implements PipeTransform {

  transform(value: number): any {
    return (Math.round(value-273.2));
  }

}