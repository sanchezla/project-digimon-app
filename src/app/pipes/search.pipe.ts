import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText?: any): any {
    if (searchText === '') { return value; }
    if (!value) {
      return;
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase();

    return value.filter(item => {
      let matchFound = false;
      if (item.name && item.id && item.level) {
        const name = item.name;
        const index = item.id;
        const level = item.level;
        const searchName = JSON.stringify(name).toLowerCase().includes(searchText);
        const searchId = JSON.stringify(index).toLowerCase() === searchText;
        const searchLevel = JSON.stringify(level).toLowerCase().includes(searchText);
        if (searchName || searchId || searchLevel) {
          matchFound = true;
        }
      }
      return matchFound;
    });
  }

}
