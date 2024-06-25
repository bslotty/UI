import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Button } from '../../models/icon_button';
import { PresetsService } from '../../services/presets.service';
import { EventActions } from '../../models/enums/event_actions';
import { ButtonEvent } from '../../models/button_event';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
  ]
})
export class ConfirmComponent implements OnInit {

  title: string = "NOT SET";
  message: string = "NOT SET";

  header_actions: Button[] = [
    structuredClone(this._presets.buttons.complete),
    structuredClone(this._presets.buttons.close),
  ];

  constructor(
    private _diagref: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _presets: PresetsService,
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
  }

  header_event(event: ButtonEvent) {
    switch(event.action){
      case EventActions.complete:
        this._diagref.close(true);
        break;

      default:
        this._diagref.close();
        break;
    }
  }
}
