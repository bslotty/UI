import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {

  @Input() image: string  = ""// base64


  constructor() { }
}
