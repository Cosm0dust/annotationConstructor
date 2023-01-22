import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genitive'
})
export class GenitivePipe implements PipeTransform {

  transform(value: string,): string {

    return value;
  }

}
