import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonEvent } from '../../models/button_event';
import { EventActions } from '../../models/enums/event_actions';
import { Button } from '../../models/icon_button';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styles: [ ":host { width: 100% }" ]
})
export class SectionHeaderComponent {

  @Input() title:   string                     = "NOT SET";
  @Input() buttons: Button[]                   = [];
  @Output() event:  EventEmitter<ButtonEvent>  = new EventEmitter();

  constructor() { }

  emit(action: EventActions){
    let e = new ButtonEvent(action)
    this.event.emit(e);
  }
}

