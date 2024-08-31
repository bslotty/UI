import { Component, Input } from "@angular/core";
import { Color } from "../../models/enums/mat_color";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.scss",
})
export class CarouselComponent {
  readonly Color = Color
  @Input() imgs: string[] = [];
  activeIndex: number = 1;
}
