import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-revolver',
  templateUrl: './revolver.component.html',
  styleUrl: './revolver.component.scss'
})
export class RevolverComponent {
  @Input() imgs: string[] = [];
  constructor(){}
}
