import { Component, Input, OnInit } from '@angular/core';
import { MatColor } from '../../models/enums/mat_color';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss',],
})
export class IconComponent implements OnInit {

  @Input() name: string    = "bug";
  @Input() color: MatColor = MatColor.warn;
  @Input() size: number    = 24;

  readonly MatColor = MatColor;

  constructor() { }

  ngOnInit(): void {

  }
}





