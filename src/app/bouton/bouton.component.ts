import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bouton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bouton.component.html',
  styleUrl: './bouton.component.scss'
})
export class BoutonComponent {
  @Input() color!: string;
}
