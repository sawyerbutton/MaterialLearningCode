import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subContent'
})
export class SubContentPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.substring(0, 10);
  }

}
