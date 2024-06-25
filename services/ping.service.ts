import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar, MatLegacySnackBarConfig as MatSnackBarConfig } from '@angular/material/legacy-snack-bar';
import { Color } from '../models/enums/mat_color';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  config: MatSnackBarConfig;

  constructor(
    private ping: MatSnackBar,
  ) {
    this.config = new MatSnackBarConfig();
    this.config.horizontalPosition = "center";
    this.config.verticalPosition = "top";
    this.config.duration = 3333;
  }

  send( color: Color, message: string) {
    this.config.panelClass = ["mat-" + Color[color] ];
    this.ping.open(message, "", this.config);
  }


}




