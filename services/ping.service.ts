import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatColor } from '../models/enums/mat_color';

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

  send( color: MatColor, message: string) {
    this.config.panelClass = ["mat-" + MatColor[color] ];
    this.ping.open(message, "", this.config);
  }


}




