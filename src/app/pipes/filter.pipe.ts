import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any[]): any {
    let result = value.filter( item => args.indexOf(item.name) > -1);
    result = value.filter(item => args.indexOf(item.code) > -1);
    return result;
  
  }
}