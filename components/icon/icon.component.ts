import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../models/enums/mat_color';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss',],
})
export class IconComponent implements OnInit {

  @Input() name: string    = "bug";
  @Input() color: Color = Color.warn;
  @Input() size: number    = 36;

  @Input() svg: boolean = false;

  readonly Color = Color;

  constructor() { }

  ngOnInit(): void {

  }
}





