import { Component, Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { filter, Observable, of } from 'rxjs';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { FormComponent } from '../dialogs/form/form.component';
import { FormInputField } from '../models/form_input_field';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  settings: MatDialogConfig = {
    minWidth: "300px",
    maxWidth: "100%",
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
}
