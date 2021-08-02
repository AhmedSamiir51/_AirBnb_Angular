import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterCity:string ) {


    if (value.length===0 || filterCity ==='' ) {
      return  value

    }



    var city=[]
    for(var cities of value){
      if (cities['houseStreet'] === filterCity) {

        city.push(cities);
      }
    }

    return  city ;

  }


}
