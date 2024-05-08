import { Injectable } from '@angular/core';
import { EventActions } from '../models/enums/event_actions';
import { Color } from '../models/enums/mat_color';
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
        Color.accent,
        'check',
        Color.light
      ),

      filter: new Button(
        EventActions.filter,
        Color.transparent,
        'filter',
        Color.primary
      ),

      refresh: new Button(
        EventActions.refresh,
        Color.transparent,
        'rotate-cw',
        Color.primary
      ),

      add: new Button(
        EventActions.add,
        Color.transparent,
        'plus',
        Color.accent
      ),

      delete: new Button(
        EventActions.delete,
        Color.transparent,
        'trash',
        Color.warn
      ),

      link: new Button(
        EventActions.link,
        Color.transparent,
        'chevron-right',
        Color.primary
      ),

      complete: new Button(
        EventActions.complete,
        Color.accent,
        'check',
        Color.light
      ),

      close: new Button(
        EventActions.close,
        Color.transparent,
        'x',
        Color.primary
      ),

      date: new Button(
        EventActions.selectDate,
        Color.transparent,
        'calendar',
        Color.primary
      ),

      search: new Button(
        EventActions.search,
        Color.transparent,
        'search',
        Color.primary
      ),

      // truncate: new Button(EventActions.truncate)
      //   .setColor(Color.warn)
      //   .setIcon("minus-circle", Color.light),

      // heir: new Button(EventActions.heir)
      //   .setColor(Color.transparent)
      //   .setIcon("heir", Color.primary),

      square_checked: new Button(
        EventActions.checkbox,
        Color.transparent,
        'check-square',
        Color.primary
      ),

      square: new Button(
        EventActions.checkbox,
        Color.transparent,
        'square',
        Color.primary
      ),

      edit: new Button(
        EventActions.edit,
        Color.transparent,
        'edit-2',
        Color.primary
      ),

      sort: new Button(
        EventActions.sort,
        Color.transparent,
        'shuffle',
        Color.primary
      ),

      sort_asc: new Button(
        EventActions.sortAsc,
        Color.transparent,
        'chevron-up',
        Color.primary
      ),

      sort_asc_active: new Button(
        EventActions.sortAsc,
        Color.accent,
        'chevron-up',
        Color.light
      ),

      sort_desc: new Button(
        EventActions.sortDesc,
        Color.transparent,
        'chevron-down',
        Color.primary
      ),

      sort_desc_active: new Button(
        EventActions.sortDesc,
        Color.warn,
        'chevron-down',
        Color.light
      ),

      login: new Button(
        EventActions.complete,
        Color.transparent,
        'log-in',
        Color.accent
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
