import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
   if(!value){
   return null;
  }
  else{
    return value.substr(0,30) +'...';
  }
  }

}
