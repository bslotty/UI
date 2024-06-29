import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../models/enums/mat_color';
import { Sort, SortDirection } from '../../models/sort';

@Component({
  selector: 'app-list-filter-sort',
  templateUrl: './list-filter-sort.component.html',
  styles: ``
})
export class ListFilterSortComponent implements OnInit {
  readonly Color = Color;
  readonly SortDirection = SortDirection;

  @Input() sort: Sort;
  @Output() event: EventEmitter<Sort> = new EventEmitter();

  public fieldNames:string[] = [];

  ngOnInit(){
    this.fieldNames = Object.keys(this.sort.enumList).filter(key => !isNaN(Number(this.sort.enumList[key])));
    console.log("fields: ", this.fieldNames);
  }


  emit(){
    this.event.emit(this.sort);
  }

  flipSortDirection() {
    this.sort.toggleDirection();
    this.emit();
  }

  setSortField(field: string) {
    this.sort.active = this.sort.enumList[field];
    this.emit();
  }



}
