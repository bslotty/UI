import { Component} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { ButtonEvent } from '../../models/button_event';
import { EventActions } from '../../models/enums/event_actions';
import { FilterOptionsRange } from '../../models/filter_options_range';
import { FormInputField } from '../../models/form_input_field';
import { Button } from '../../models/icon_button';
import { PresetsService } from '../../services/presets.service';
import { FormTypes } from '../../models/enums/form_types';
import { FormGeneralService } from '../../services/form-general.service';

@Component({
  selector: 'app-select-date-range',
  templateUrl: './select-date-range.component.html',
  styles: [
  ]
})
export class SelectDateRangeComponent {

  title: string = "Select Dates";

  headerActions: Button[] = [
    {...this._presets.buttons.save},
    {...this._presets.buttons.close},
  ];

  form: FormGroup;
  controls: FormInputField[];

  constructor(
    private _form: FormGeneralService,
    private _presets: PresetsService,
    private _diagref: MatDialogRef<SelectDateRangeComponent>,
    // @Inject(MAT_DIALOG_DATA) public data ,
  ) {
    this.form = this._form.initForm(FormTypes.dateRange);
    this.controls = this._form.initControls(this.form, FormTypes.dateRange);
  }

  headerEvent(e: ButtonEvent) {
    switch (e.action) {
      case EventActions.close:
        this._diagref.close();
        break;

      case EventActions.save:
        let range = new FilterOptionsRange(this.form.get("start")?.value, this.form.get("end")?.value);
        this._diagref.close(range);
    }
  }

}
