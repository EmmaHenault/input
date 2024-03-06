import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Developer } from './models/developer.model';
import { DeveloperComponent } from './developer/developer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeveloperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
