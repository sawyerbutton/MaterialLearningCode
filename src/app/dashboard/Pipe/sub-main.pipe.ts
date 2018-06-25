import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subMain'
})
export class SubMainPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.substring(0, 100);
  }

}
