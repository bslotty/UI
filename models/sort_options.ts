import { PresetsService } from '../services/presets.service';
import { EventActions } from './enums/event_actions';
import { Color } from './enums/mat_color';
import { Button } from './icon_button';
import { SortDirection } from './sort';

export class SortOption {
  field_name: string;
  buttons: Button[];
  direction: SortDirection;

  asc         = structuredClone(this._presets.buttons.sort_asc);
  asc_active  = structuredClone(this._presets.buttons.sort_asc_active);
  desc        = structuredClone(this._presets.buttons.sort_desc);
  desc_active = structuredClone(this._presets.buttons.sort_desc_active);

  constructor(name: string, private _presets: PresetsService) {
    this.field_name = name;
    this.setDirection(SortDirection.None);
    this.setButtons();
  }

  setButtons(): SortOption {
    switch (this.direction) {
      case SortDirection.Asc:
        this.buttons = [this.asc_active, this.desc];
        break;

      case SortDirection.Desc:
        this.buttons = [this.asc, this.desc_active];
        break;

      case SortDirection.None:
        this.buttons = [this.asc, this.desc];
        break;
    }
    return this;
  }

  setDirection(direc: SortDirection): SortOption {
    this.direction = direc;
    this.setButtons();
    return this;
  }

  toggleDirection() {
    switch (this.direction) {
      case SortDirection.Asc:
        this.setDirection(SortDirection.Desc);
        break;
      case SortDirection.Desc:
        this.setDirection(SortDirection.None);
        break;
      case SortDirection.None:
        this.setDirection(SortDirection.Asc);
        break;
    }
  }
}
