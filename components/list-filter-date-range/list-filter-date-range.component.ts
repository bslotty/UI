import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from '../../models/enums/mat_color';
import { FilterOptionsRange } from '../../models/filter_options_range';

@Component({
  selector: 'app-list-filter-date-range',
  templateUrl: './list-filter-date-range.component.html',
  styles: ``
})
export class ListFilterDateRangeComponent {

  readonly Color = Color;
  
  @Input() range: FilterOptionsRange;
  @Output() event: EventEmitter<FilterOptionsRange> = new EventEmitter();

  emit(){
    this.event.emit(this.range);
  }

  resetRange() {
    this.range = new FilterOptionsRange();
    this.emit();
  }
}
