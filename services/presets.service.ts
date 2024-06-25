import { Injectable } from '@angular/core';
import { EventActions } from '../models/enums/event_actions';
import { MatColor } from '../models/enums/mat_color';
import { Button } from '../models/icon_button';

@Injectable({
  providedIn: 'root',
})
export class PresetsService {
  buttons: any;

  constructor() {
    this.setupButtons();
  }

  setupButtons() {
    this.buttons = {
      save: new Button(
        EventActions.save,
        MatColor.accent,
        'check',
        MatColor.light
      ),

      filter: new Button(
        EventActions.filter,
        MatColor.transparent,
        'filter',
        MatColor.primary
      ),

      refresh: new Button(
        EventActions.refresh,
        MatColor.transparent,
        'restart_alt',
        MatColor.primary
      ),

      add: new Button(
        EventActions.add,
        MatColor.transparent,
        'add',
        MatColor.accent
      ),

      delete: new Button(
        EventActions.delete,
        MatColor.transparent,
        'trash',
        MatColor.warn
      ),

      link: new Button(
        EventActions.link,
        MatColor.transparent,
        'chevron_right',
        MatColor.primary
      ),

      complete: new Button(
        EventActions.complete,
        MatColor.accent,
        'check',
        MatColor.light
      ),

      close: new Button(
        EventActions.close,
        MatColor.transparent,
        'x',
        MatColor.primary
      ),

      date: new Button(
        EventActions.selectDate,
        MatColor.transparent,
        'date_range',
        MatColor.primary
      ),

      search: new Button(
        EventActions.search,
        MatColor.transparent,
        'search',
        MatColor.primary
      ),

      // truncate: new Button(EventActions.truncate)
      //   .setColor(MatColor.warn)
      //   .setIcon("minus-circle", MatColor.light),

      // heir: new Button(EventActions.heir)
      //   .setColor(MatColor.transparent)
      //   .setIcon("heir", MatColor.primary),

      square_checked: new Button(
        EventActions.checkbox,
        MatColor.transparent,
        'check-square',
        MatColor.primary
      ),

      square: new Button(
        EventActions.checkbox,
        MatColor.transparent,
        'square',
        MatColor.primary
      ),

      edit: new Button(
        EventActions.edit,
        MatColor.transparent,
        'edit-2',
        MatColor.primary
      ),

      sort: new Button(
        EventActions.sort,
        MatColor.transparent,
        'shuffle',
        MatColor.primary
      ),

      sort_asc: new Button(
        EventActions.sortAsc,
        MatColor.transparent,
        'chevron-up',
        MatColor.primary
      ),

      sort_asc_active: new Button(
        EventActions.sortAsc,
        MatColor.accent,
        'chevron-up',
        MatColor.light
      ),

      sort_desc: new Button(
        EventActions.sortDesc,
        MatColor.transparent,
        'chevron-down',
        MatColor.primary
      ),

      sort_desc_active: new Button(
        EventActions.sortDesc,
        MatColor.warn,
        'chevron-down',
        MatColor.light
      ),

      login: new Button(
        EventActions.complete,
        MatColor.transparent,
        'log-in',
        MatColor.accent
      ),
    };
  }

  //  Helper
  objValuesToString(o: any): any {
    Object.keys(o).forEach((k) => {
      if (typeof o[k] === 'object') {
        return this.objValuesToString(o[k]);
      }

      o[k] = '' + o[k];
    });

    return o;
  }
}
