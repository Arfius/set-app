import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counterInJson',
  pure: false
})
export class CounterInJsonPipe implements PipeTransform {

  transform(arr: any[], key: any, value:any): Number {

    if(key===undefined){
      return arr.length
    }else
      return arr.filter(function(x){return x[key]==value}).length;
  }

}
