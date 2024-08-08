import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Button } from '../../models/icon_button';
import { PresetsService } from '../../services/presets.service';
import { EventActions } from '../../models/enums/event_actions';
import { ButtonEvent } from '../../models/button_event';

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

  header_actions: Button[] = [
    structuredClone(this._presets.buttons.complete),
    structuredClone(this._presets.buttons.close),
  ];

  constructor(
    // private _diagref: MatDialogRef<ConfirmComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private _presets: PresetsService,
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
  }

  header_event(event: ButtonEvent) {
    switch(event.action){
      case EventActions.complete:
        this.dialogRef.close(true);
        break;

      default:
        this.dialogRef.close();
        break;
    }
  }
}
