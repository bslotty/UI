import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../models/enums/mat_color';

@Component({
  selector: 'app-attention-message',
  templateUrl: './attention-message.component.html',
  styles: [
  ]
})
export class AttentionMessageComponent implements OnInit {

  @Input() textColor: Color = Color.primary;
  @Input() bgColor  : Color = Color.transparent;
  @Input() message  : string = "MESSAGE NOT SET";

  readonly Color = Color;

  constructor() { }

  ngOnInit(): void {
  }

}
