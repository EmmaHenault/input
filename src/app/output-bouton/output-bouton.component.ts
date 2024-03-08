import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output-bouton',
  standalone: true,
  imports: [],
  templateUrl: './output-bouton.component.html',
  styleUrl: './output-bouton.component.scss'
})
export class OutputBoutonComponent {
  @Input() 
  name!: string;
  @Output()
  isClick: EventEmitter<string> = new EventEmitter();

  buttonIsClick(): void {
    this.isClick.emit(`le ${this.name} a été cliqué`);
  }
}
