import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonEvent } from '../../models/button_event';
import { EventActions } from '../../models/enums/event_actions';
import { Color } from '../../models/enums/mat_color';
import { Button } from '../../models/icon_button';
import { Sort, SortDirection } from '../../models/sort';
import { PresetsService } from '../../services/presets.service';

@Component({
  selector: 'app-list-sort',
  templateUrl: './list-sort.component.html',
  styles: [
  ]
})
export class ListSortComponent implements OnInit {
  
  title: string = "Sort List";

  headerActions: Button[] = [
    { ...this._presets.buttons.close },
  ];

  sortActions: Button[] = [
    structuredClone(this._presets.buttons.sort_asc),
    structuredClone(this._presets.buttons.sort_desc),
  ];

  list: string[] = [];

  constructor(
    private _diagref: MatDialogRef<ListSortComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _presets: PresetsService,
  ) {
    if (this.data.sort == undefined)
      throw "Sortable Object Not Set";

    this.list = Object.keys(this.data.sort.enum).filter(v => !(+v >= 0) );
  }

  ngOnInit(): void { }

  headerEvent(e: ButtonEvent) {
    switch (e.action) {
      default:
        this._diagref.close();
        break;
    }
  }

  sortEvent(event: EventActions, index: string) {
    let direction = event == 13 ? SortDirection.Asc : SortDirection.Desc;
    let sort = new Sort( this.data.sort.enum, this.data.sort.enum[index], direction );
    this._diagref.close(sort)
  }
}
