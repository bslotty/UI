import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayRelated'
})
export class DisplayRelatedPipe implements PipeTransform {

  constructor() { };

  transform(value: any, arg: string): string {
    if (typeof value === "object") {
      switch (arg) {
        case "species":
          return value.name;

        case "type":
          return value.name;

        case "ingredient":
          return value.name;

        default:
          return value;
      }


    } else {
      return value;
    }
  }

}
