import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mulitply'
})
export class MulitplyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * args;
  }

}
