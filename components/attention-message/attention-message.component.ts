import { Component, Input, OnInit } from '@angular/core';
import { MatColor } from '../../models/enums/mat_color';

@Component({
  selector: 'app-attention-message',
  templateUrl: './attention-message.component.html',
  styles: [
  ]
})
export class AttentionMessageComponent implements OnInit {

  @Input() textColor: MatColor = MatColor.primary;
  @Input() bgColor  : MatColor = MatColor.transparent;
  @Input() message  : string = "MESSAGE NOT SET";

  readonly MatColor = MatColor;

  constructor() { }

  ngOnInit(): void {
  }

}
