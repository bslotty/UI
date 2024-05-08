import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../models/enums/mat_color';
import { Sort, SortDirection } from '../../models/sort';

@Component({
  selector: 'app-sort-icon',
  templateUrl: './sort-icon.component.html',
  styles: [
  ]
})
export class SortIconComponent implements OnInit {

  @Input() sort: Sort =  new Sort(0, SortDirection.Desc);
  @Input() name: any;

  @Output() event: EventEmitter<Sort> = new EventEmitter()

  readonly Color = Color;
  readonly SortDirection = SortDirection;

  constructor() { }

  ngOnInit(): void {
  }

  sortEvent(event: Event){
    if (this.sort.active != this.name){
      this.sort.setDirection(SortDirection.Asc)
    } else {
      this.sort.toggleDirection();
    }
    
    this.sort.active = this.name;
    

    this.event.emit(this.sort);
  }

}
