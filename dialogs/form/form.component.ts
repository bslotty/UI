import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { FormInputField } from '../../models/form_input_field';
import { Button } from '../../models/icon_button';
import { Color } from '../../models/enums/mat_color';
import { FormGeneralService } from '../../services/form-general.service';
import { ButtonEvent } from '../../models/button_event';
import { EventActions } from '../../models/enums/event_actions';
import { PingService } from '../../services/ping.service';
import { PresetsService } from '../../services/presets.service';
import { FormInputTypes } from '../../models/enums/form_input_type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent implements OnInit {
  readonly types = FormInputTypes;

  form: UntypedFormGroup = new UntypedFormGroup({});
  control_map: FormInputField[] = [];

  title: string = 'NOT SET';
  message: string = 'NOT SET';

  header_actions: Button[] = [
    structuredClone(this._presets.buttons.save),
    structuredClone(this._presets.buttons.close),
  ];

  constructor(
    private _diagref: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formUtil: FormGeneralService,
    private _ping: PingService,
    private _presets: PresetsService
  ) {}

  ngOnInit(): void {
    if (this.data.form == undefined) throw new Error('Form undefined');

    this.title = this.data.title;
    this.form = this.data.form;
    this.control_map = this.data.control_map;

    this.header_actions[0].disabled = true;
    this.form.valueChanges.subscribe((v) => {
      this.updateButtonStatus();
    });
  }

  updateButtonStatus() {
    if (this.formUtil.isValid(this.form)) {
      this.header_actions[0].disabled = false;
    } else {
      this.header_actions[0].disabled = true;
    }
  }

  btnEvent(e: ButtonEvent) {
    switch (e.action) {
      case EventActions.save:
        this.submit();
        break;

      default:
        this._diagref.close();
    }
  }

  submit(){
    if (this.formUtil.isValid(this.form)) {
      this._diagref.close(this.form.value);
    } else {
      this._ping.send(Color.warn, 'Form invalid');
      this.form.markAllAsTouched();
    }
  }
}
