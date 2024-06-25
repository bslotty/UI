import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator, MatLegacyPaginatorIntl as MatPaginatorIntl } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { isObservable, Observable } from 'rxjs';
import { Button } from '../../models/icon_button';
import { Color } from '../../models/enums/mat_color';
import { PhaseType } from '../../models/section_phase';
import { ButtonEvent } from '../../models/button_event';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  @Input() list: any[] = [];
  @Input() columns: string[] = [];
  @Input() actions: Button[] = [];
  @Output() event: EventEmitter<ButtonEvent> = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) pagination: MatPaginator;
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>([]);
  fullColumns: string[] = [];

  hasData: boolean = false;

  readonly Color = Color;

  constructor(
    private _error: ErrorService,
    private cdr: ChangeDetectorRef,
  ) {
    this.pagination           = new MatPaginator(new MatPaginatorIntl(), this.cdr);
    this.sort                 = new MatSort();

    this.pagination.pageSize
  }


  ngOnInit(): void {

    this.fullColumns = [...this.columns];
    if (this.actions.length > 0) {
      this.fullColumns.push("actions");
    }

    if (this.list == undefined) {
      return;
    }

    if (isObservable(this.list)) {
      this.list.subscribe({
        next: (item: any) => {
          this.setDataSource(item);
        }, error: (e) => {
          // this.phase = this._error.getHTTPError(e);
        }
      });

    }
    else {
      this.hasData = this.list.length != 0;
      this.setDataSource(this.list);
    }
  }

  setDataSource(list: any[]){
    this.dataSource.data = list;

    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.pagination;
    });
  }

  emit(event: any, row: any) {
    this.event.emit( new ButtonEvent(event).setRow(row) );
  }

}
