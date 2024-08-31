import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrl: "./text.component.scss",
})
export class TextComponent {
  @Input() level: TextVariant = 0;
  @Input() label: string | number = "NOT SET";
}

export enum TextVariant {
  h1,
  h2,
  h3,
  h4,
  body,
  quote,
  body_large,
  body_large_muted,
  body_small,
  body_small_muted,
}
