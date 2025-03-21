import { Component, Input } from '@angular/core';
import { Color } from '../../models/enums/mat_color';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrl: './incrementer.component.scss'
})
export class IncrementerComponent {
  readonly Color = Color

  @Input() value!: number;

  increaseQuantity() {
    if (this.value != 7) {
      this.value = +this.value + 1
    }
  }

  decreaseQuantity() {
    if (this.value != 0) {
      this.value = +this.value - 1
    }
  }

}
