import { Component, Input } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.scss",
})
export class CarouselComponent {
  @Input() imgs: string[] = [];
  activeIndex: number = 0;

  prev() {
    if (this.activeIndex != 0) {
      this.activeIndex = this.activeIndex - 1;
    }
  }

  next() {
    if (this.activeIndex != this.imgs.length-1) {
      this.activeIndex = this.activeIndex + 1;
    }
  }
}
