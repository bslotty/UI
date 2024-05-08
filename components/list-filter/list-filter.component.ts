import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../models/enums/mat_color';
import { FilterOptions } from '../../models/filter_options';
import { Sort, SortDirection } from '../../models/sort';
import { FilterOptionsRange } from '../../models/filter_options_range';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styles: [],
})
export class ListFilterComponent implements OnInit {
  readonly Color = Color;
  readonly SortDirection = SortDirection;

  @Output()
  event: EventEmitter<FilterOptions> = new EventEmitter();
  @Input()
  options: FilterOptions;

  constructor() {
    this.options = new FilterOptions();
  }

  ngOnInit(): void {}

  emit() {
    this.event.emit(this.options);
  }

  resetSearch() {
    this.options.search = '';
    this.emit();
  }

  resetRange() {
    this.options.range = new FilterOptionsRange();
    this.emit();
  }

  flipSortDirection() {
    this.options.sort.toggleDirection();
    this.emit();
  }

  page(dir: string) {
    if (dir == 'next') {
      this.options.page.nextResults();
    } else if (dir == 'prev') {
      this.options.page.prevResults();
    }

    this.emit();
  }
}
