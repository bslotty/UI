import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, find, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  list: BehaviorSubject<SectionLoading[]> = new BehaviorSubject<SectionLoading[]>([ new SectionLoading("page", false) ]);

  constructor( ) { }

  isLoading(page_name: string): Observable<boolean> {

    let bool = this.list.pipe(
      map( arr => arr.find(i => i.name == page_name)?.ready )
    );
    return bool;
  }

  newLoader(name:string){
    let dupe: boolean = this.list.value.find(i=> i.name == name) != undefined;
    if (!dupe){
      let current = this.list.value;
      current.push(new SectionLoading(name, false));
      this.list.next(current);
    }
  }

  /**
   * 
   * @param name @desc "Section Name"
   * @param ready @desc "Is section ready?"
   */
  changeStatus(name: string, ready: boolean){
    let updated_list = this.list.value.map( item => {
      if ( item.name == name ) {
        item.ready = ready;
      }
      return item;
    });
    this.list.next(updated_list);
  }

}



export class SectionLoading {
  name: string;
  ready: boolean;

  constructor(name: string, ready: boolean){
    this.name = name;
    this.ready = ready;
  }
}
