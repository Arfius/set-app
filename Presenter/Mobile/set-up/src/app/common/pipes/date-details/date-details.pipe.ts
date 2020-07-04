import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDetails',
  pure: false
})
export class DateDetailsPipe implements PipeTransform {

  transform(value: any, v: any): any {
    var d = new Date(value)
    if(v=="d"){
      let options = {   day: 'numeric' };
      return d.toLocaleDateString('en-US', options)
    }
    
    if(v=="m"){
      let options = {   month: 'long'};
      return d.toLocaleDateString('en-US', options)
    }

      if(v=="y"){
        let options = {  year: 'numeric' };
        return d.toLocaleDateString('en-US', options)
      }

      return "-";
  }

}
