import { FilterOptionsPaging } from "./filter_options_paging";
import { FilterOptionsRange } from "./filter_options_range";
import { Sort, SortDirection, SortDefaultEnum } from "./sort";

export class FilterOptions {
    preset: string = "";
    search: string = "";
    sort  : Sort = new Sort(0, SortDirection.Desc);
    range : FilterOptionsRange = new FilterOptionsRange();
    page  : FilterOptionsPaging; 

    constructor(){
      this.page = new FilterOptionsPaging();
    }

    setPreset(preset: string): FilterOptions {
      this.preset = preset;
      return this;
    }

    setSearch(term: string): FilterOptions {
      this.search = term;
      return this;
    }

    setSort(sort: Sort): FilterOptions {
      this.sort = sort;
      return this;
    }

    setRange(range: FilterOptionsRange){
      this.range = range;
      return this;
    }

    searchList<T>(list: T[]): T[] {
      if (this.search == "") return list;
      return list.filter( m => JSON.stringify(m).toLowerCase().indexOf( this.search.toLowerCase() ) > -1 );
    }

    sortList<T>(list: T[], enumList:any ): T[] {
       
      let k = this.sort.enumList[this.sort.active];
      return list.sort((a:any, b:any) => {
        if (this.sort == undefined)
          return a - b;

        switch ( typeof a[k] ) {
          case "string":
            return this.sort.direction == SortDirection.Asc ?
              a[k].toLowerCase() >= b[k].toLowerCase() ? 1 : -1  :
              b[k].toLowerCase() >= a[k].toLowerCase() ? 1 : -1  ;

          case "object":
            if (a[k] == undefined ) return 1;
            if (b[k] == undefined ) return -1;

            return this.sort.direction == SortDirection.Asc ?
              a[k].getTime() - b[k].getTime() :
              b[k].getTime() - a[k].getTime() ;

          
          default:
            return this.sort.direction == SortDirection.Asc ?
              a[k] - b[k] : b[k] - a[k];
        }
      });
    }

    filterDateRange<T>(list: T[], sortFieldName: string): T[] {
      return list.filter((item: any) => {
        //  Get Date Field By Name
        let d = item[sortFieldName];
        let entryTime = new Date(
          d.getFullYear(),
          d.getMonth(),
          d.getDate()
        ).getTime();

        //  Get Limits
        let start = new Date(this.range.start).getTime();
        let end = new Date(this.range.end).getTime();

        //  Compare & Return
        return entryTime >= start && entryTime <= end;
      });
    }


}