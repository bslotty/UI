import { Component, Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatLegacyDialog as MatDialog,  MatLegacyDialogConfig as MatDialogConfig, MatLegacyDialogContainer as MatDialogContainer } from '@angular/material/legacy-dialog';
import { filter, Observable, of } from 'rxjs';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { FormComponent } from '../dialogs/form/form.component';
import { FormInputField } from '../models/form_input_field';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  settings: MatDialogConfig = {
    minWidth: "65%",
    // width: "550px",
    data: {},
    disableClose: true,
  };

  constructor(
    private dialog: MatDialog,
  ) { }

  initSettings( title: string, message: string) {
    this.settings.data.title       = title
    this.settings.data.message     = message;
  }

  initFormSettings( form:UntypedFormGroup, maps: FormInputField[] ) {
    this.settings.data.form        = form;
    this.settings.data.control_map = maps;
  }


  
  open( component: any ): Observable<any> {
    return this.dialog.open(component, this.settings).afterClosed().pipe( filter(res => res != undefined) ); 
  }

  confirmation(): Observable<any> {
    return this.open(ConfirmComponent);
  }

  form(): Observable<any> {
    return this.open(FormComponent);
  }



  
  //  Crud Presets
  presetCreate(){
    
  }

}
