import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormInputTypes } from '../../models/enums/form_input_type';
import { Color } from '../../models/enums/mat_color';
import { FormInputField } from '../../models/form_input_field';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styles: [ ":host { width: 100% }" ]
})
export class FormFieldComponent implements OnInit {

  @Input() field: FormInputField = new FormInputField("", FormInputTypes.text);
  @Output() event: EventEmitter<string> = new EventEmitter(true);

  @ViewChild('input') input: ElementRef = new ElementRef("#input");

  password_type: string = "password";
  password_icon: string = "eye";

  readonly Color = Color;
  readonly types    = FormInputTypes;

  floatLabel: FloatLabelType = "auto";

  constructor() {
    if (this.field == undefined){
      throw "FormField field not found.";
    }
  }

  ngOnInit(): void { 
    
    if (this.field == undefined){
      throw `Error: FormFieldComponent not set: ${ this.field }`;
    }

    if (this.field.type == undefined){
      throw `Error: FormFieldComponent.type not set: ${ this.field }`;
    }

    if (this.field.type == this.types.phone){
      this.phoneFormatter();
    }

    // if (this.field.type == this.types.number || this.field.type == this.types.measurement){
    //   this.floatLabel =
    // }

  }

  emit(type: string){
    this.event.emit( type )
  }


  togglePasswordVisibility(){
    if (this.password_type == "password"){
      this.password_type = "text";
      this.password_icon = "eye-off";

    } else if (this.password_type == "text"){
      this.password_type = "password";
      this.password_icon = "eye";
    }
  }

  phoneFormatter(){
    if (this.field.control == undefined){
      return;
    }


    this.field.control.valueChanges.subscribe(v => {

      let formatted = "";
      const phone_regex = /\D/g;
      let m = v.replace(phone_regex, '');

      if ( m.length == 0 ){
        this.field.control?.setValue(formatted, { emitEvent: false });
        return;
      }
      
      if (m.length <= 3) {
        formatted = m.slice(0,3);
      } else if (m.length > 3 && m.length <= 6) {
        formatted = `${m.slice(0,3)}-${m.slice(3)}`;
      } else if (m.length > 6 && m.length <= 10 ) {
        formatted = `${m.slice(0,3)}-${m.slice(3,6)}-${m.slice(6,10)}`;
      } else {
        formatted = `${m.slice(0,3)}-${m.slice(3,6)}-${m.slice(6,10)} ${m.slice(10)}`;
      }
      
      this.field.control?.setValue(formatted, { emitEvent: false });
    });
  }
}