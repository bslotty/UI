import { Injectable } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { FormTypes } from "../models/enums/form_types";
import { FormInputTypes } from "../models/enums/form_input_type";
import { FormInputField } from "../models/form_input_field";

@Injectable({
  providedIn: "root",
})
export class FormGeneralService {
  public defaultFormControls = {
    id    : [`create_${Math.floor(Math.random() * 100000000)}`, []],
    string: ["", [Validators.required, Validators.maxLength(1024)]],
    date  : [new Date(), [Validators.required]],
    float : [0, [Validators.required, Validators.maxLength(1024), Validators.pattern("[0-9.]+"), Validators.min(0.001)]],
  };
  constructor(public builder: FormBuilder) {}

  isValid(form: UntypedFormGroup): boolean {
    return form.valid && form.dirty && form.enabled;
  }

  initForm(section: FormTypes): UntypedFormGroup {
    switch (section) {
      case FormTypes.search:
        return this.builder.group({
          term: ["", [Validators.minLength(2)]],
        });

      case FormTypes.dateRange:
        return this.builder.group({
          start: ["", []],
          end  : ["", []],
        });

      case FormTypes.preset:
        return this.builder.group({
          preset: ["", [Validators.required]],
        });

      default:
        throw "InitForm(): FormType not found.";
    }
  }

  initControls(form: UntypedFormGroup, section: FormTypes): FormInputField[] {
    switch (section) {
      case FormTypes.search:
        return [new FormInputField("Search Term", FormInputTypes.text).setControl(form.get("term") as FormControl)];

      case FormTypes.dateRange:
        return [
          new FormInputField("Start", FormInputTypes.date).setControl(form.get("start") as FormControl),
          new FormInputField("End", FormInputTypes.date).setControl(form.get("end") as FormControl),
        ];

      case FormTypes.preset:
        return [new FormInputField("Preset", FormInputTypes.autocomplete).setControl(form.get("preset") as FormControl)];

      default:
        throw "InitControl(): FormType not found.";
    }
  }
}

export class CustomValidator {
  static numeric(control: AbstractControl) {
    let v = control.value;

    if (v === null || v === "") return null;

    if (isNaN(v) || v.toString().includes("e")) return { invalidNumber: true };

    return null;
  }
}
