import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(value: any, searchKey: string, propName: string): any {
    if (value.length !== 0 && searchKey) {
      return value.filter(item =>
        item[propName].toLowerCase().includes(searchKey.toLowerCase())
      );
    }

    return value;
  }
}
