import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Button } from '../../models/icon_button';
import { PresetsService } from '../../services/presets.service';
import { EventActions } from '../../models/enums/event_actions';
import { ButtonEvent } from '../../models/button_event';
import { Color } from '../../models/enums/mat_color';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [  ]
})
export class ConfirmComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<ConfirmComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  title: string = "NOT SET";
  message: string = "NOT SET";

  public closeButton = new Button(
    EventActions.delete,
    Color.transparent,
    'close',
    Color.primary,
  );
  public saveButton = new Button(
    EventActions.save,
    Color.transparent,
    'check',
    Color.accent,
  );
  public headerButtons: Button[] = [this.saveButton, this.closeButton];

  constructor() { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
  }

  header_event(event: ButtonEvent) {
    switch(event.action){
      case EventActions.save:
        this.dialogRef.close(true);
        break;

      default:
        this.dialogRef.close();
        break;
    }
  }
}
