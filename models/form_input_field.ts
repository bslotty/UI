import { AbstractControl, FormControl, UntypedFormControl } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { FormInputTypes } from "./enums/form_input_type";
import { of } from "rxjs/internal/observable/of";

export class FormInputField {
    label    : string;
    type     : FormInputTypes;
    options  : Observable<any[]> = of([]);
    control  : UntypedFormControl = new FormControl() as UntypedFormControl;
  
    hint     : string = "";
    suffix   : string = "";
    minLength: number = 0;
    maxLength: number = 256;
  
    constructor( label:string, type:FormInputTypes) {
      this.label   = label;
      this.type    = type;
    }

    setControl(value: AbstractControl): FormInputField {
      this.control = value as UntypedFormControl;
      return this;
    }

    setOptions(options: Observable<any[]>){
      this.options = options;
      return this;
    }
  
    setLength(length: "min" | "max" , value: number){
      if (length == "min"){
        this.minLength = value;
      }
  
      if (length == "max"){
        this.maxLength = value;
      }
  
      return this;
    }
  
    setHint(hint: string){
      this.hint = hint;
      return this;
    }

    setSuffix(text: string){
      this.suffix = text;
      return this;
    }
  
  }