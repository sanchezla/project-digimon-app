import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

   transform(value: any, filters?: any): any {

    if (!value) {
      return;
    }

    if (!filters) {
      return value;
    }
    filters = filters.toString();
    filters = filters.toLowerCase();

    return value.filter((item) => {
      let machFound = false;

      if (item.level) {
        machFound = JSON.stringify(item.level)
        .toLocaleLowerCase()
        .includes(filters);
      }
      return machFound;
    });
  }


}
