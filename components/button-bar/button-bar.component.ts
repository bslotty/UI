import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventActions } from '../../models/enums/event_actions';
import { Color } from '../../models/enums/mat_color';
import { Button } from '../../models/icon_button';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styles: [
  ]
})
export class ButtonBarComponent implements OnInit {

  @Input() buttons: Button[] = [];
  @Output() event: EventEmitter<EventActions> = new EventEmitter();

  readonly Color = Color;

  constructor() { }

  ngOnInit(): void { }

  emit(event: EventActions) {
    this.event.emit(event);
  }

}
