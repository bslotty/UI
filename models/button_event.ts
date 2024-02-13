import { EventActions } from "./enums/event_actions";

export class ButtonEvent {
    action: EventActions;
    row   : any;

    constructor(action: EventActions){
        this.action = action;
    }

    setRow(row: Object): ButtonEvent {
        this.row = row;
        return this;
    }
}