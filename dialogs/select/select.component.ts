import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { ButtonEvent } from '../../models/button_event';
import { Color } from '../../models/enums/mat_color';
import { FormInputField } from '../../models/form_input_field';
import { Button } from '../../models/icon_button';
import { FormGeneralService } from '../../services/form-general.service';
import { PresetsService } from '../../services/presets.service';
import { FormTypes } from '../../models/enums/form_types';
import { UIModule } from '../../ui.module';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styles: []
})
export class SelectComponent implements OnInit {

  title: string = "Select";
  headerActions: Button[] = [
    this._presets.buttons.close
  ];

  searchForm   : UntypedFormGroup = this._gForm.initForm(FormTypes.search);
  searchFormMap: FormInputField[] = this._gForm.initControls(this.searchForm, FormTypes.search);

  readonly Color = Color;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _diagref: MatDialogRef<SelectComponent>,
    private _gForm: FormGeneralService,
    private _presets: PresetsService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get WhiteList(): any[] {
    if (this.data.options == undefined)
      throw "Select Popup: Options not set.";

    let term = "";
    if (this.searchForm.get("term"))
      term = this.searchForm.get("term")?.value;

    return this.data.options.filter((o: string) => o.indexOf(term) > -1);
  }

  initForm() {
    this.searchForm    = this._gForm.initForm(FormTypes.search);
    this.searchFormMap = this._gForm.initControls(this.searchForm, FormTypes.search);
  }

  headerEvent(event: ButtonEvent) {
    switch (event.action) {
      default:
        this._diagref.close();
        break;
    }
  }

  selectOption(option: string) {
    this._diagref.close(option);
  }
}
