import { EventActions } from "./enums/event_actions";
import { Color } from "./enums/mat_color";
import { Button, IconColors } from "./icon_button";

export class RouterButton extends Button {

    route: string;

    constructor(name: string, bg_color: Color, icon_name: string, icon_color: Color) {
        super(EventActions.route, bg_color, icon_name, icon_color)
        this.route = name;
    }
}