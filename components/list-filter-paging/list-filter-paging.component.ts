import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterOptionsPaging } from '../../models/filter_options_paging';
import { Color } from '../../models/enums/mat_color';

@Component({
  selector: 'app-list-filter-paging',
  templateUrl: './list-filter-paging.component.html',
  styles: ``
})
export class ListFilterPagingComponent {

  readonly Color = Color;
  
  @Input() paging: FilterOptionsPaging = new FilterOptionsPaging();
  @Output() event: EventEmitter<FilterOptionsPaging> = new EventEmitter();


  emit(){
    this.event.emit(this.paging);
  }

  page(dir: string) {
    if (dir == "next") {
      this.paging.nextResults();
    } else if (dir == "prev") {
      this.paging.prevResults();
    }

    this.emit();
  }

  setPageLimit(limit: number) {
    this.paging.length = limit;
    this.paging.current_page = 1;
    this.emit();
  }

}
