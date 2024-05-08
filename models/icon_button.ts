
import { Color } from "./enums/mat_color";
import { EventActions } from "./enums/event_actions";
import { ButtonState } from "./enums/button_state";

export class Button {

  name : EventActions;
  color: Color = Color.primary;
  icon : Icon = new Icon("bug", Color.primary, 24);
  label: string = "";

  currentColors: IconColors = new IconColors(Color.transparent, Color.transparent);
  initialColors: IconColors = new IconColors(Color.transparent, Color.transparent);
  disabled     : boolean = false;

  constructor(name: EventActions, bg_color: Color, icon_name: string, icon_color: Color ) {
    this.name          = name;
    this.currentColors = new IconColors(Color.warn, Color.warn);

    this.setColor(bg_color);
    this.setIcon(icon_name, icon_color);
  }

  setColor(color: Color) {
    this.currentColors.background = color;
    return this;
  }

  setIcon(name: string, color: Color, size: number = 24) {
    this.currentColors.text = color;
    this.icon               = new Icon(name, color, size);
    return this;
  }

  disable(): Button {
    if (this.initialColors == undefined){
      this.initialColors = new IconColors(this.currentColors.background, this.currentColors.text)
    }

    this.currentColors.background = Color.transparent;
    this.currentColors.text       = Color.disabled;
    return this;
  }

  enable(): Button {
    this.currentColors.background = this.initialColors.background;
    this.currentColors.text       = this.initialColors.text;
    return this;
  }
}



export class IconColors {
  background: Color;
  text      : Color;

  constructor(background: Color, text: Color) {
    this.background = background;
    this.text       = text;
  }
}





export class Icon {
  name : string   = "bug";
  color: Color = Color.warn;
  size : number   = 24;

  constructor(name: string, color: Color, size: number = 24) {
    this.name  = name;
    this.color = color;
    this.size  = size;
  }

  setName(name: string): Icon {
    this.name = name;
    return this;
  }

  setColor(color: Color): Icon {
    this.color = color;
    return this;
  }
}