import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
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
    this.config.duration = 333333;
  }

  send( color: Color, message: string) {
    this.config.panelClass = ["mat-" + Color[color] ];
    this.ping.open(message, "", this.config);
  }


}




