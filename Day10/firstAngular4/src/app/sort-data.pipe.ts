import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
      if (args === "ascending"){
        return value.sort();
      }else if (args === "descending"){
        return value.sort().reverse();
      }else if(args === "numAscending"){
        return value.sort(function(a,b) { 
          return a-b;
        });
      }else if(args === "numDescending"){
        return value.sort(function(a,b) { 
          return a-b;
        }).reverse();
      }

    return value.sort();
  }

}
