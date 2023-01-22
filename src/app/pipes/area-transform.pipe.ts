import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaTransform'
})
export class AreaTransformPipe implements PipeTransform {
  transform(value: string): string {
    if(value){
      return value.replace(/\n/g, '<br/>');
    }
    else {
      return ''
    }

  }

}
