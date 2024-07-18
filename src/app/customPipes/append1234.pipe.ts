import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append1234',
  standalone: true
})
export class Append1234Pipe implements PipeTransform {

  transform(value: string, anyText:string): string {
    if(value==null) return value
    return value+" "+anyText;
  }

}
